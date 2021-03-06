angular
.module('Diabetus')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html',
    controller: 'HomeCtrl as home'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl as login'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl as register'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'usersShowCtrl as usersShow'
  })
  .state('usersUpdate', {
    url: '/users/:id/update',
    templateUrl: '/js/views/users/edit.html',
    controller: 'usersUpdateCtrl as usersUpdate'
  })
  .state('usersDelete', {
  url: '/users/:id/delete',
  templateUrl: '/js/views/users/delete.html',
  controller: 'usersDeleteCtrl as usersDelete'
  }
  )
  .state('userBgTests', {
    url: '/users/:id/bgtests',
    templateUrl: '/js/views/bgTests/index.html',
    controller: 'bgTestsIndexCtrl as bgIndex'
  })
  .state('userBgTestsNew', {
    url: '/users/:id/bgtests/new',
    templateUrl: '/js/views/bgTests/new.html',
    controller: 'bgTestsNewCtrl as bgNew'
  })
  .state('medications', {
    url: '/medications',
    templateUrl: '/js/views/medication/index.html',
    controller: 'medicationsIndexCtrl as medicationIndex'
  });

  $urlRouterProvider.otherwise('/');
}
