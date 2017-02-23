angular
.module('Diabetus')
.controller('bgTestsNewCtrl', bgTestsNewCtrl);

bgTestsNewCtrl.$inject = ['$state','$stateParams', 'BgTest', 'User'];
function bgTestsNewCtrl($state, $stateParams, BgTest, User){
  const vm = this;
  vm.user = User.get($stateParams)
  vm.create = () => {
    BgTest
      .save(vm.bg_test)
      .$promise
      .then(() => {
        $state.go('userBgTests', $stateParams);
      });
  };
}
