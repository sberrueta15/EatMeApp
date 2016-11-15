'use strict';

/**
 * @ngdoc function
 * @name EatMeApp.controller:EventoDetalleMisEventosCtrl
 * @description
 * # EventoDetalleMisEventosCtrl
 * Controller of the EatMeApp
 */
angular.module('comensalApp')
  .controller('EventoDetalleMisEventosCtrl', ['$scope', 'uiGmapGoogleMapApi', '$geolocation','$stateParams','eventoService',
    function ($scope, uiGmapGoogleMapApi, $geolocation, $stateParams,eventoService) {

    var vm = this;


    //ACA VA EL ID POSTA HUE SUAREZ
    vm.miId=2;

    vm.evento=$stateParams.eventoObj;
    vm.estoyInscripto=$stateParams.estoyInscripto;

      vm.Inscribirse = Inscribirse;

      vm.tipos_comida = [
        {name:"Celiaco",value:"Celiac"},
        {name:"Vegano",value:"Vegan"},
        {name:"Vegeteriano",value:"Vegeterian"},
        {name:"Sin Restricciones",value:"NoRestriction"}
      ];
    vm.myCurrentPosition = { latitude: vm.evento.locationX, longitude:vm.evento.locationY };
      vm.evento.map = {
      center: {
        latitude: vm.evento.locationX,
        longitude:vm.evento.locationY
      },
      zoom: 7,
      options: {
        streetViewControl: false,
        mapTypeControl: false,
        scaleControl: false,
        rotateControl: false,
        zoomControl: false
      }
     };

    vm.evento.map.markers = [vm.evento.marker];
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
        console.log("asd");
        eventoService.Inscribirse(vm.miId, vm.evento.id)
          .then(
            function(succsess){
              console.log("Evento creado!");
            },
            function(error){
              console.log("error!",error);
            });
      }



  }]);
