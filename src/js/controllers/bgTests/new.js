angular
.module('Diabetus')
.controller('bgTestsNewCtrl', bgTestsNewCtrl)

bgTestsNewCtrl.$inject = ['$state', 'BgTest']
function bgTestsNewCtrl($state, BgTest){
  const vm = this;

  vm.create = () => {
    BgTest
      .save(vm.bg_test)
      .$promise
      .then(() => {
        $state.go('bgIndex');
      });
  };
}
