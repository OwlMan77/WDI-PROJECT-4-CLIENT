angular
.module('Diabetus')
.controller('bgTestsIndexCtrl', bgTestsIndexCtrl);

bgTestsIndexCtrl.$inject = ['BgTest', '$state', '$stateParams', 'User'];
function bgTestsIndexCtrl(BgTest, $state, $stateParams, User){
  const vm = this;
  BgTest
  .query()
  .$promise
  .then(data => {
    vm.bg_tests = data;
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
  }
