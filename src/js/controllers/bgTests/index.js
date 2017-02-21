angular
.module('Diabetus')
.controller('bgTestsCtrl', bgTestsCtrl);

 bgTestsCtrl.$inject = ['Bg_Tests','TokenService', '$state'];
 function bgTestsCtrl(BgTests){
    const vm = this;
    vm.bg_Tests = Bg_Tests.query();
    if (!TokenService.getToken()){
  $state.go('login');
}
 }
