angular
.module('Diabetus')
.controller('usersShowCtrl', usersShowCtrl);

usersShowCtrl.$inject = ['User','$stateParams'];
function usersShowCtrl(User, $stateParams){
  const vm = this;

  vm.user = User.get($stateParams);

  vm.userDelete = () => {
    User
    .delete($stateParams)
    .$promise.then(data => {
      $state.go("home");
    });
  };
}
