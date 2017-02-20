RegisterCtrl.$inject = ['User'];
function RegisterCtrl(User) {
  const vm    = this;

  vm.register =  () => {
    User.register();
  };
}
