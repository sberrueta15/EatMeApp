'use strict';

/**
 * @ngdoc overview
 * @name aaApp
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
    'textAngular',
    'uiGmapgoogle-maps',
    'ngGeolocation'
  ])
  .config(['$stateProvider','$urlRouterProvider','uiGmapGoogleMapApiProvider',
    function ($stateProvider,$urlRouterProvider,GoogleMapApiProviders,routeProvider) {



      $stateProvider
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

      .state('chef.dashboard',{
        url:'/dashboard',
        templateUrl:'views/dashboard.html',
        controller:'DashboardCtrl',
        controllerAs:'dashboard',
      })


      $urlRouterProvider.otherwise('/chef/crear-evento');

      GoogleMapApiProviders.configure({
          //    key: 'your api key',
          v: '3.20', //defaults to latest 3.X anyhow
          libraries: 'weather,geometry,visualization'
      });


  }]);
