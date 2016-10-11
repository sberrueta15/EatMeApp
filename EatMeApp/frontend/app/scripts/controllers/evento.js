'use strict';

/**
* @ngdoc function
* @name aaApp.controller:EventoCtrl
* @description
* # EventoCtrl
* Controller of the EatMeApp
*/
angular.module('EatMeApp')
  .controller('EventoCtrl', ['$scope', 'uiGmapGoogleMapApi', '$geolocation','eventoService',
    function ($scope, uiGmapGoogleMapApi, $geolocation, eventoService) {

      // --------------------------------------------------------------------------------
      // Variables
      // --------------------------------------------------------------------------------
      var vm = this;
      vm.crearEvento = crearEvento;

      // wysiwyg
      vm.ta_toolbar = "[['bold','italics','underline'],['ul','ol']]"
      vm.new_evento = {}

      // maps
      vm.myCurrentPosition = { latitude: -34.8894797, longitude: -56.1614878 }
      vm.map = { center: vm.myCurrentPosition, zoom: 16 };
      vm.map.options = {
        scrollwheel: false,
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
          vm.new_evento.coords =vm.map.markers[0].coords
          $scope.$apply();
        }
      }
      
      // Get current position
      $geolocation.getCurrentPosition({
        timeout: 6000
      }).then(function (position) {
        vm.myCurrentPosition.latitude = position.coords.latitude;
        vm.myCurrentPosition.longitude = position.coords.longitude;
        vm.map.markers = [
          {
            id: Date.now(),
            coords: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            },
          }
        ];
      });

      // strip del wysiwyg
      $scope.stripFormat = function ($html) {
        return $filter('htmlToPlaintext')($html);
      };

      function crearEvento(){
        var obj  = {} //el json a mandar
        //eventoService.crearEvento(vm.new_evento)
        console.log("creando evento!")
      }

    }]);
