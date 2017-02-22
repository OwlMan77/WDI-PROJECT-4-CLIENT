angular
.module('Diabetus')
.controller('bgTestsIndexCtrl', bgTestsIndexCtrl);

 bgTestsIndexCtrl.$inject = ['BgTest','TokenService', '$state'];
 function bgTestsIndexCtrl(BgTest, TokenService, $state){
    const vm = this;
    vm.bg_Tests = Bg_Tests.query();
    if (!TokenService.getToken()){
  $state.go('login');
}
 }
