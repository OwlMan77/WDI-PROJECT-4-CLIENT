angular
  .module('Diabetus')
  .factory('BgTest', BgTest);

BgTest.$inject = ['API', '$resource'];
function BgTest(API, $resource){
  return $resource(`${API}/bg_tests/:id`, { id: '@_id'}, {
    'delete': {method: 'DELETE', url: `${API}/bg_tests/:id`},
    'update': {method: 'PUT', url: `${API}/bg_tests/:id` }
  });
}
