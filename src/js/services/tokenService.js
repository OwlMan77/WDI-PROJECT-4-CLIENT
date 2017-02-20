angular
  .module('Diabetus')
  .service('TokenService', TokenService);

TokenService.$inject = ['$window', 'jwtHelper'];
function TokenService($window, jwtHelper){
  const self = this;

  self.setToken = setToken;
  function setToken(token){
    return $window.localStorage.setItem('authToken', token);
  }

  self.getToken = getToken;
  function getToken(){
    return $window.localStorage.getItem('authToken');
  }

  self.decodeToken = decodeToken;
  function decodeToken(){
    const token = self.getToken();
    return token ? jwtHelper.decodeToken(token) : null;
  }

  self.clearToken = clearToken;
  function clearToken(){
    $window.localStorage.removeItem('authToken');
  }

}
