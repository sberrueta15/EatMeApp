'use strict';

/**
 * @ngdoc overview
 * @name EatMeApp
 * @description
 * # EatMeApp
 *
 * Main module of the application.
 */
 angular
 .module('EatMeApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'ui.bootstrap',
  'textAngular',
  'uiGmapgoogle-maps',
  'ngGeolocation',
  'angular-storage',
  'angular-jwt'

  ])
 .config(['$stateProvider','$urlRouterProvider','uiGmapGoogleMapApiProvider','jwtInterceptorProvider','$httpProvider',
  function ($stateProvider,$urlRouterProvider,GoogleMapApiProviders,jwtInterceptorProvider,$httpProvider) {

//-------------------------------
// JWT
//-------------------------------
jwtInterceptorProvider.tokenGetter = function(store) {
  return store.get('access_token');
};
// Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
$httpProvider.interceptors.push('jwtInterceptor');


$stateProvider
.state('home',{
  url:'/home',
  views:{
    'home':{
      templateUrl:'views/home.html',
      controller:'AuthCtrl',
      controllerAs:'auth',
    },
  },
  authenticate:false
})


.state('chef',{
  url:'/chef',
  templateUrl:'views/base.html',
  controller:'BaseCtrl',
  controllerAs:'base',
  abstract:true,
})

.state('chef.crear-evento',{
  url:'/crear-evento',
  templateUrl:'views/evento.crear.html',
  controller:'EventoCtrl',
  controllerAs:'evento',
  authenticate:true
})


.state('chef.evento-detalle',{
 url:':id/detalle-evento/',
 params:{id:null,eventoObj:null},
 templateUrl:'views/evento.detalle.html',
 controller:'EventoDetalleCtrl',
 controllerAs:'eventoDetalle',
 authenticate:true

})


.state('chef.dashboard',{
  url:'/dashboard',
  templateUrl:'views/dashboard.html',
  controller:'DashboardCtrl',
  controllerAs:'dashboard',
  authenticate:true
})

.state('chef.mi-perfil',{
  url:'/mi-perfil',
  templateUrl:'views/mi-perfil.html',
  controller:'MiperfilCtrl',
  controllerAs:'perfil',
  authenticate:true

})

$urlRouterProvider.otherwise('/chef/crear-evento');

GoogleMapApiProviders.configure({
          //    key: 'your api key',
          v: '3.20', //defaults to latest 3.X anyhow
          libraries: 'weather,geometry,visualization'
        });


}])
 .run(['$rootScope','$state','AutenticationService',
  function ($rootScope, $state,AutenticationService) {
    $rootScope.isHome = false;
    
    $rootScope.$on('$stateChangeStart', function (e, toState, toParams) {
      if(toState.authenticate && !AutenticationService.isAuthenticated()){
        $rootScope.toState = toState.name;
        $rootScope.toStateParams = toParams;
        e.preventDefault();
        $state.go('home');

      }
      if (toState.name === 'home') {
        $rootScope.isHome = true;
        if(AutenticationService.isAuthenticated()){
          e.preventDefault();
          $rootScope.isHome = false;
          $state.go('chef.dashboard');
        }
      } else {
        $rootScope.isHome = false;
      }
    });

  }]);
