'use strict';

/**
 * @ngdoc function
 * @name comensalApp.controller:EventoDetalleMisEventosCtrl
 * @description
 * # EventoDetalleMisEventosCtrl
 * Controller of the comensalApp
 */
angular.module('comensalApp')
  .controller('EventoDetalleMisEventosCtrl', ['$scope', 'uiGmapGoogleMapApi', '$geolocation','$stateParams','eventoService','ComensalService',
    function ($scope, uiGmapGoogleMapApi, $geolocation, $stateParams,eventoService,ComensalService) {

    var vm = this;

    //ACA VA EL ID POSTA HUE SUAREZ
    vm.miId=ComensalService.getCurrentCommensal().id;

    vm.evento=$stateParams.eventoObj;
    vm.estoyInscripto=$stateParams.estoyInscripto;

      vm.inscribirse = inscribirse;

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


      function inscribirse(){
        eventoService.Inscribirse(vm.miId, vm.evento.id, vm.evento)
          .then(
            function(succsess){
              console.log("Evento creado!");
            },
            function(error){
              console.log("error!",error);
            });
      }



  }]);
