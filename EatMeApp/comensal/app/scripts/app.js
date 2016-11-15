'use strict';

/**
 * @ngdoc overview
 * @name comensalApp
 * @description
 * # comensalApp
 *
 * Main module of the application.
 */
 angular
 .module('comensalApp', [
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
  'angular-jwt',
  'angular-loading-bar'
  ])
 .config(['$stateProvider','$urlRouterProvider','uiGmapGoogleMapApiProvider','jwtInterceptorProvider','$httpProvider','jwtOptionsProvider','cfpLoadingBarProvider',
  function ($stateProvider,$urlRouterProvider,GoogleMapApiProviders,jwtInterceptorProvider,$httpProvider,jwtOptionsProvider,cfpLoadingBarProvider){

    //-------------------------------
    // JWT
    //-------------------------------

    jwtOptionsProvider.config({
       whiteListedDomains: ['54.70.143.222', 'localhost']
    });

    jwtInterceptorProvider.tokenGetter = function(store) {
      return store.get('access_token');
    };
    // Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
    $httpProvider.interceptors.push('jwtInterceptor');

    //
    // LOADING BAR
    //
    cfpLoadingBarProvider.includeSpinner = false; // or not
    cfpLoadingBarProvider.includeBar = true; // or not



    $stateProvider
    .state('comensal',{
      url:'/comensal',
      templateUrl:'views/base.html',
      controller:'MainCtrl',
      controllerAs:'main',
      abstract:true,
    })


        .state('home',{
        url:'/home',
        views:{
          'home':{
            templateUrl:'views/home.html',
            controller:'AuthCtrl',
            controllerAs:'auth'
          },
        },
        authenticate:false
      })

    .state('comensal.listado',{
      url:'/listado',
      templateUrl: 'views/comensal.listado.html',
      controller: 'comensalListadoCtrl',
      controllerAs: 'comensalListado',
      authenticate:true

    })
    .state('comensal.mis-eventos',{
      url:'/mis-eventos',
      templateUrl: 'views/comensal.listadoMisEventos.html',
      controller: 'ComensalmiseventosCtrl',
      controllerAs: 'comensalListado',
      authenticate:true

    })
    .state('comensal.evento-detalle',{
      url:'/:id/detalle-evento/',
      params:{eventoObj:null,estoyInscripto:null},
      templateUrl:'views/evento.detalle.html',
      controller:'EventoDetalleMisEventosCtrl',
      controllerAs:'eventoDetalle',
      authenticate:true

    })


.state('comensal.mi-perfil',{
  url:'/mi-perfil',
  templateUrl:'views/mi-perfil.html',
  controller:'MiperfilCtrl',
  controllerAs:'perfil',
  authenticate:true

})


    $urlRouterProvider.otherwise('/home');

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
          $state.go('comensal.listado');
        }
      } else {
        $rootScope.isHome = false;
      }
    });

  }]);
