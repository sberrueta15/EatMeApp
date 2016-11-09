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
    'ngGeolocation'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/comensal.listado', {
        templateUrl: 'views/comensal.listado.html',
        controller: 'ComensalListadoCtrl',
        controllerAs: 'comensal.listado'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
