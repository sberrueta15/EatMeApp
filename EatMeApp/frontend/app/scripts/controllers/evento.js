'use strict';

/**
* @ngdoc function
* @name EatMeApp.controller:EventoCtrl
* @description
* # EventoCtrl
* Controller of the EatMeApp
*/
angular.module('EatMeApp')
  .controller('EventoCtrl', ['$scope', 'uiGmapGoogleMapApi', '$geolocation','eventoService','$timeout','$state',
    function ($scope, uiGmapGoogleMapApi, $geolocation, eventoService,$timeout,$state) {

      // --------------------------------------------------------------------------------
      // Variables
      // --------------------------------------------------------------------------------
      var vm = this;
      vm.eventoMensaje="Crear Evento!"
      vm.eventoRedireccionMensaje=""
      vm.new_evento = {};
       vm.new_evento.coords = {}
      vm.tipos_comida = [
        {name:"Celiaco",value:"Celiac"},
        {name:"Vegano",value:"Vegan"},
        {name:"Vegeteriano",value:"Vegeterian"},
        {name:"Sin Restricciones",value:"NoRestriction"}
      ];
      vm.new_evento.tipo_comida = vm.tipos_comida[3];
      vm.crearEvento = crearEvento;

      // wysiwyg
      vm.ta_toolbar = "[['bold','italics','underline'],['ul','ol']]";

      // maps
      vm.myCurrentPosition = { latitude: -34.8894797, longitude: -56.1614878 };
      console.log(vm.myCurrentPosition)
      vm.map = { center: vm.myCurrentPosition, zoom: 16 };
      vm.map.options = {
        scrollwheel: false
      };
      vm.map.events = {
        click: function (map, eventName, originalEventArgs) {
          var e = originalEventArgs[0];
          var lat = e.latLng.lat(), lon = e.latLng.lng();

          var marker = {
            id: Date.now(),
            coords: {
              latitude: lat,
              longitude: lon
            },
          };
          vm.map.markers = [marker];
          vm.new_evento.coords =vm.map.markers[0].coords;
          $scope.$apply();
        }
      };

      // Get current position
      $geolocation.getCurrentPosition({
        timeout: 6000
      }).then(function (position) {
        vm.myCurrentPosition.latitude = position.coords.latitude;
        vm.myCurrentPosition.longitude = position.coords.longitude;


         vm.new_evento.coords.latitude = position.coords.latitude;
         vm.new_evento.coords.longitude = position.coords.longitude;
         

        vm.map.markers = [
          {
            id: Date.now(),
            coords: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          }
        ];
      });

      // strip del wysiwyg
      $scope.stripFormat = function ($html) {
        return $filter('htmlToPlaintext')($html);
      };

      function crearEvento(){
        vm.eventoMensaje="Creando..."
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
        eventoService.crearEvento(obj)
          .then(
            function(succsess){
              vm.eventoMensaje="Crear Evento!"
              vm.eventoRedireccionMensaje="Sera redireccionado al Dashboard."
              $timeout(function() {
                $state.go('chef.dashboard')
              }, 2000);            },
            function(error){
              console.log("error!",error);
            });
      }

    }]);
