angular
.module('Diabetus')
.controller('bgTestsIndexCtrl', bgTestsIndexCtrl);

bgTestsIndexCtrl.$inject = ['BgTest', '$state'];
function bgTestsIndexCtrl(BgTest, $state){
  const vm = this;
  BgTest
  .query()
  .$promise
  .then(data => {
    vm.bg_tests = data;
  });
  }
