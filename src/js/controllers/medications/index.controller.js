angular
.module('Diabetus')
.controller('medicationsIndexCtrl', medicationsIndexCtrl);

medicationsIndexCtrl.$inject = ['Medication', '$state'];
function medicationsIndexCtrl(Medication, $state){
  const vm = this;
  Medication
  .query()
  .$promise
  .then(data => {
    vm.medications = data;
  });
  }
