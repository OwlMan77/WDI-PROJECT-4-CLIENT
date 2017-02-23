angular
  .module('Diabetus')
  .controller('usersUpdateCtrl', usersUpdateCtrl);

usersUpdateCtrl.$inject = ['User','Medication', '$state', '$stateParams'];
function usersUpdateCtrl(User, Medication, $state, $stateParams) {
  const vm = this;
  User
  .get($stateParams)
  .$promise
  .then(response => {
    vm.user = response;
  });

  Medication.query()
  .$promise
  .then(data => {
    vm.medications = data;
  });

  vm.update = () => {
    vm.user.medication_id = parseInt(vm.user.medication_id);
    User
    .update($stateParams, vm.user)
    .$promise
    .then(data => {
      console.log(data);
      //need to put stateparamas to get user back to page as we need the id for the revelant page.
      $state.go('usersShow', $stateParams);
    });
  };
}
