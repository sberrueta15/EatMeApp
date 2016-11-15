'use strict';

/**
 * @ngdoc function
 * @name EatMeApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the EatMeApp
 */
angular.module('EatMeApp')
  .controller('DashboardCtrl',['CocineroService','$scope','$sce', function (CocineroService,$scope,$sce) {
    var vm = this;

    vm.getEventos = getEventos;
    vm.currentCooker = CocineroService.getCurrentCooker()
    $scope.toBind = function(data){
        return $sce.trustAsHtml(data);
    }

    // Activate
    getEventos();

    function getEventos(){
    CocineroService.getEventsByCooker(vm.currentCooker).then(function(success){
      vm.eventos = success
    })
    }

  }]);
