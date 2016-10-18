'use strict';

/**
 * @ngdoc function
 * @name EatMeApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the EatMeApp
 */
angular.module('EatMeApp')
  .controller('DashboardCtrl',['eventoService','$scope', function (eventoService,$scope) {
    var vm = this;

    vm.getEventos = getEventos;



    // Activate
    getEventos();

    function getEventos(){
    eventoService.getEvento().then(function(success){
      vm.eventos = success
    })
    }

  }]);
