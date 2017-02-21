angular
.module('Diabetus')
.controller('RegisterCtrl', RegisterCtrl);
RegisterCtrl.$inject = ['User', 'TokenService', 'CurrentUserService'];
function RegisterCtrl(User, TokenService, CurrentUserService) {
  const vm    = this;

  vm.register =  () => {
    User.register(vm.user)
    .$promise
    .then(data => {
      TokenService.setToken(data.token);
      CurrentUserService.saveUser(data.user);
    }
  );
  };
}
