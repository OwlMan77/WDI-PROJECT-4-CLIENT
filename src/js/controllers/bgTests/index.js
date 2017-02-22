angular
.module('Diabetus')
.controller('bgTestsIndexCtrl', bgTestsIndexCtrl);

 bgTestsIndexCtrl.$inject = ['Bg_Tests','TokenService', '$state'];
 function bgTestsIndexCtrl(Bg_Tests, TokenService, $state){
    const vm = this;
    vm.bg_Tests = Bg_Tests.query();
    if (!TokenService.getToken()){
  $state.go('login');
}
 }
