angular
.module('Diabetus')
.controller("HomeCtrl", HomeCtrl);

HomeCtrl.$inject = ["User", "CurrentUserService", "$state"];
function HomeCtrl(User, CurrentUserService, $state){
  const vm = this;

  if (CurrentUserService.getUser()) $state.go("home");

}
