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

  ])
 .config(['$stateProvider','$urlRouterProvider','uiGmapGoogleMapApiProvider',
  function ($stateProvider,$urlRouterProvider,GoogleMapApiProviders) {



    $stateProvider
    .state('home',{
      url:'/home',
      views:{
        'home':{
          templateUrl:'views/home.html',
        },
      },
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
    })


    .state('chef.evento-detalle',{
     url:':id/detalle-evento/',
     params:{id:null,eventoObj:null},
     templateUrl:'views/evento.detalle.html',
     controller:'EventoDetalleCtrl',
     controllerAs:'eventoDetalle',
   })


    .state('chef.dashboard',{
      url:'/dashboard',
      templateUrl:'views/dashboard.html',
      controller:'DashboardCtrl',
      controllerAs:'dashboard',
    })

    .state('chef.mi-perfil',{
      url:'/mi-perfil',
      templateUrl:'views/mi-perfil.html',
      controller:'MiperfilCtrl',
      controllerAs:'perfil',
    })

    $urlRouterProvider.otherwise('/chef/crear-evento');

    GoogleMapApiProviders.configure({
          //    key: 'your api key',
          v: '3.20', //defaults to latest 3.X anyhow
          libraries: 'weather,geometry,visualization'
        });


  }])
 .run(['$rootScope','$state',
  function ($rootScope, $state) {
    $rootScope.isHome = false;
    
    $rootScope.$on('$stateChangeStart', function (e, toState) {
      if (toState.name === 'home') {
        $rootScope.isHome = true;
    } else {
      $rootScope.isHome = false;
    }
  });

}]);
