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
  ])
  .config(['$stateProvider','$urlRouterProvider','uiGmapGoogleMapApiProvider',
    function ($stateProvider,$urlRouterProvider,GoogleMapApiProviders){


      $stateProvider
        .state('comensal',{
          url:'/comensal',
          templateUrl:'views/base.html',
          controller:'BaseCtrl',
          controllerAs:'base',
          abstract:true,
        })
        .state('comensal.listado',{
          url:'/listado',
          templateUrl: 'views/comensal.listado.html',
          controller: 'comensalListadoCtrl',
          controllerAs: 'comensalListado',
        })

      $urlRouterProvider.otherwise('/comensal/listado');

      GoogleMapApiProviders.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
      });


    }]);
