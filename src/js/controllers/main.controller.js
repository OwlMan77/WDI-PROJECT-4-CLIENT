angular
.module('Diabetus')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject =['$rootScope', 'CurrentUserService', '$state', 'TokenService' ];
function MainCtrl($rootScope, CurrentUserService, $state, TokenService){
const vm = this;
vm.user = CurrentUserService.getUser();

$rootScope.$on('loggedIn', () => {
  vm.user = CurrentUserService.getUser();
  $state.go('usersShow', {id: vm.user.id});
});

vm.logout = () => {
  event.preventDefault();
  CurrentUserService.clearUser();
};

$rootScope.$on('loggedOut', () => {
  vm.user = null;
  $state.go('login');});
}
