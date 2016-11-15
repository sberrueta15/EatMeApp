'use strict';

/**
 * @ngdoc function
 * @name EatMeApp.controller:EventoDetalleCtrl
 * @description
 * # EventoDetalleCtrl
 * Controller of the EatMeApp
 */
angular.module('EatMeApp')
  .controller('EventoDetalleCtrl', ['$scope', 'uiGmapGoogleMapApi', '$geolocation','$stateParams',
    function ($scope, uiGmapGoogleMapApi, $geolocation, $stateParams) {

    var vm = this;
    vm.evento=$stateParams.eventoObj;
      vm.ta_toolbar = "[['bold','italics','underline'],['ul','ol']]";

    vm.myCurrentPosition = { latitude: -34.8894797, longitude: -56.1614878 };
      vm.evento.map = {
      center: {
        latitude:vm.myCurrentPosition.latitude,
        longitude:vm.myCurrentPosition.longitude
      },
      zoom: 10,
      options: {
        streetViewControl: false,
        mapTypeControl: false,
        scaleControl: false,
        rotateControl: false,
        zoomControl: false
      }
     };
      var marker = {
      id: Date.now(),
      coords: {
        latitude:  vm.evento.locationX,
        longitude: vm.evento.locationY
      },
    };
    vm.evento.map.markers = [marker];
      $scope.evento=vm.evento;
  //  vm.evento.coords =vm.map.markers[0].coords;


    //$scope.evento= evento;

    /*
    vm.new_evento.descripcion=vm.evento.descripcion;
    vm.new_evento.tipo_comida.value=vm.evento.tipo_comida.value;
    vm.new_evento.precio=vm.evento.precio;
    vm.new_evento.cantidad_cupos=vm.evento.cantidad_cupos;
    vm.new_evento.cantidad_cupos=vm.evento.cantidad_cupos;
    vm.new_evento.coords.longitude=vm.evento.coords.longitude;
*/


  }]);