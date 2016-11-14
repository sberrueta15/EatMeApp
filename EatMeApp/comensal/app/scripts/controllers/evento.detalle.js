'use strict';

/**
 * @ngdoc function
 * @name EatMeApp.controller:EventoDetalleMisEventosCtrl
 * @description
 * # EventoDetalleMisEventosCtrl
 * Controller of the EatMeApp
 */
angular.module('comensalApp')
  .controller('EventoDetalleMisEventosCtrl', ['$scope', 'uiGmapGoogleMapApi', '$geolocation','$stateParams',
    function ($scope, uiGmapGoogleMapApi, $geolocation, $stateParams) {

    var vm = this;
    vm.evento=$stateParams.eventoObj;
    vm.estoyInscripto=$stateParams.estoyInscripto;
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

      //  vm.evento.id
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
