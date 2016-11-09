'use strict';

/**
 * @ngdoc function
 * @name comensalApp.controller:ComensalListadoCtrl
 * @description
 * # ComensalListadoCtrl
 * Controller of the comensalApp
 */
angular.module('comensalApp')
    .controller('comensal.listado',['eventoService','$scope', function (eventoService,$scope) {
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
