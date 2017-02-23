angular
  .module('Diabetus')
  .factory('Medication', Medication);

Medication.$inject = ['API', '$resource'];
function Medication(API, $resource){
  return $resource(`${API}/medication/:id`, { id: '@_id'}, {
    'delete': {method: 'DELETE', url: `${API}/bg_tests/:id`},
    'update': {method: 'PUT', url: `${API}/bg_tests/:id` }
  });
}
