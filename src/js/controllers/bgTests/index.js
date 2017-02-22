angular
.module('Diabetus')
.controller('bgTestsShowCtrl', bgTestsShowCtrl);

 bgTestsShowCtrl.$inject = ['Bg_Tests','TokenService', '$state'];
 function bgTestsShowCtrl(Bg_Tests, TokenService, $state){
    const vm = this;
    vm.bg_Tests = Bg_Tests.query();
    if (!TokenService.getToken()){
  $state.go('login');
}
 }
