angular
.module('Diabetus')
.controller('usersShowCtrl', usersShowCtrl)

usersShowCtrl.$inject = ['User','$stateParams', '$resource']
function usersShowCtrl(User, $stateParams, $resource){
  const vm = this;

  // vm.user = User.get($stateParams);
  //
  // vm.userDelete = () => {
  //   User
  //   .delete($stateParams)
  //   .$promise.then(data => {
  //     $state.go("home");
  //   });
  // };


  // const vm        = this;
  // const User = $resource(`${API}/users/:id`,
  // {id: '@_id'})
  //
  // vm.user = user.get($stateParams);

}
