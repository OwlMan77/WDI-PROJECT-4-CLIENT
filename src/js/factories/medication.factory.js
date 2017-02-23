angular
  .module('Diabetus')
  .factory('Medication', Medication);

Medication.$inject = ['API', '$resource'];
function Medication(API, $resource){
  return $resource(`${API}/medications/:id`, { id: '@_id'}, {
    'delete': {method: 'DELETE', url: `${API}/medications/:id`},
    'update': {method: 'PUT', url: `${API}/medications/:id` }
  });
}
