angular
.module('Diabetus')
.controller('bgTestsCtrl', bgTestsCtrl);

 bgTestsCtrl.$inject = ['BgTests','TokenService', '$state'];
 function bgTestsCtrl(BgTests){
    const vm = this;
    vm.bgTests = BgTests.query();
    if (!TokenService.getToken()){
  $state.go('login');
}
 }
