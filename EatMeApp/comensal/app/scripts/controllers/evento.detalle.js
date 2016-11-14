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
    vm.estoyInscripto=$stateParams.estoyInscripto;
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


      function Inscribirse(){
        /*
         * "Title":"Segundo Evento!",
         * "Description": "Vamo lo pibee!",
         "FoodType": "Celiac","Vegan","Vegeterian","NoRestriction"
         "TotalTickets": 10,
         "TicketPrice": 75,
         "SoldTickets": 0,
         "LocationX": 0,
         "LocationY": 0,
         "Id": 2
         */
        var obj  = {}; //el json a mandar

        obj.title = vm.new_evento.nombre;
        obj.description = vm.new_evento.descripcion;
        obj.footType = vm.new_evento.tipo_comida.value;
        obj.ticketPrice = vm.new_evento.precio;
        obj.totalTickets = vm.new_evento.cantidad_cupos;
        obj.locationX = vm.new_evento.coords.latitude;
        obj.locationY = vm.new_evento.coords.longitude;
        console.log(obj);
        eventoService.Inscribirse(obj)
          .then(
            function(succsess){
              console.log("Evento creado!");
            },
            function(error){
              console.log("error!",error);
            });
      }



  }]);
