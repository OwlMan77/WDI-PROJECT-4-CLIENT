angular
.module('Diabetus')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject =['$rootScope', 'CurrentUserService', '$state' ];
function MainCtrl($rootScope, CurrentUserService, $state){
const vm = this;
vm.user = CurrentUserService.getUser();
$rootScope.$on('loggedIn', () => {
  vm.user = CurrentUserService.getUser();
  $state.go('');
});

vm.logout = () => {
  event.preventDefault();
  CurrentUserService.clearUser();
};

$rootScope.$on('loggedOut', () => {
  vm.user = null;
  $state.go('home');});
}
