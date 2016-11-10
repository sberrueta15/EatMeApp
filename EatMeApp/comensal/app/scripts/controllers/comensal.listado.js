'use strict';

/**
 * @ngdoc function
 * @name comensalApp.controller:ComensalListadoCtrl
 * @description
 * # ComensalListadoCtrl
 * Controller of the comensalApp
 */
angular.module('comensalApp')
    .controller('comensalListadoCtrl',  ['$scope', 'uiGmapGoogleMapApi', '$geolocation','$stateParams','eventoService',
      function ($scope, uiGmapGoogleMapApi, $geolocation, $stateParams,eventoService) {
      var vm = this;
        vm.getEventos = getEventos;




        getEventos();
        vm.listado={};
        vm.myCurrentPosition = { latitude: -34.8894797, longitude: -56.1614878 };
        vm.map = {
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
            zoomControl: false,
            center: {
              latitude:vm.myCurrentPosition.latitude,
              longitude:vm.myCurrentPosition.longitude
            }
          }
        };
        vm.map.markers=[];


      // Activate


      function getEventos(){
        eventoService.getEvento().then(function(success){

          vm.eventos = success
          for (var x in vm.eventos){
            var xEvento=vm.eventos[x];
            var marker = {
              id: xEvento.Id,
              coords: {
                /*
                latitude:  xEvento.LocationX,
                longitude: xEvento.LocationY
                */
                latitude: -34.8894797,
                longitude:-34.8894797
              },
            };
            vm.map.markers.push(marker);


          }
          console.log(vm.eventos );
        })
      }
        $scope.map=vm.map;
    }]);
