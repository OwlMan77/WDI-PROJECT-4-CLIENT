angular
.module('Diabetus')
.controller('bgTestsIndexCtrl', bgTestsIndexCtrl);

bgTestsIndexCtrl.$inject = ['BgTest', '$state', '$stateParams', 'User', '$scope'];
function bgTestsIndexCtrl(BgTest, $state, $stateParams, User, $scope){
  const vm = this;
  let bgData = [];
  $scope.labels = [];
  $scope.data = [];

  BgTest
  .query()
  .$promise
  .then(data => {
    vm.bg_tests = data;
    vm.sortDates();
    vm.bg_tests.forEach((test) => {
      $scope.labels.push(`${test.readDate} @ ${test.readTime}`);
      bgData.push(test.bg_result);
    });
    $scope.data.push(bgData);
  });

  vm.user = User.get($stateParams);

  vm.create = () => {
    BgTest
    .save(vm.bg_test)
    .$promise
    .then(() => {
      $state.go($state.current, {}, {reload: true});
    });
  };


  $scope.series = ["Bg result"];

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };

  vm.sortDates = () => {

      function sortDates(date, time) {
        return Date.parse(date) + time.substring(11, 16).replace(':', '');
      }

      function compare(a,b) {
        if (sortDates(a.date, a.time) < sortDates(b.date, b.time))
        return -1;
        if (sortDates(a.date, a.time) > sortDates(b.date, b.time))
        return 1;
        return 0;
      }

      vm.bg_tests.sort(compare);
  };

}
