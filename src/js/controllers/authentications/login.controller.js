angular
.module('Diabetus')
.controller('LoginCtrl', LoginCtrl)


LoginCtrl.$inject = ['User', 'TokenService', 'CurrentUserService'];
function LoginCtrl(User, TokenService, CurrentUserService) {
  const vm = this;

  vm.login = () => {
    User.login(vm.user)
    .$promise
    .then(data => {
      TokenService.setToken(data.token);
      CurrentUserService.saveUser(data.user);
  });
};
}
