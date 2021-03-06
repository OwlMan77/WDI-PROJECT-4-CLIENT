angular
  .module('Diabetus')
  .factory('User', userFactory);

userFactory.$inject = ['API', '$resource'];
function userFactory(API, $resource){
  return $resource(`${API}/users/:id`, { id: '@_id'}, {
    'register': { method: 'POST', url: `${API}/register` },
    'login': { method: 'POST', url: `${API}/login` },
    'delete': {method: 'DELETE', url: `${API}/users/:id`},
    'update': {method: 'PUT', url: `${API}/users/:id` }
  });
}
