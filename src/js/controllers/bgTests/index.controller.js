angular
.module('Diabetus')
.controller('bgTestsIndexCtrl', bgTestsIndexCtrl);

bgTestsIndexCtrl.$inject = ['BgTest', '$state'];
function bgTestsIndexCtrl(BgTest, $state){
  const vm = this;
  BgTest
  .query()
  .$promise
  .then(data => {
    vm.bg_tests = data;
  });

  vm.create = () => {
    BgTest
      .save(vm.bg_test)
      .$promise
      .then(() => {
        $state.go($state.current, {}, {reload: true});
      });
  };
  }
