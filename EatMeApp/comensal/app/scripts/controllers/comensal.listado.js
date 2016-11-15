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
        vm.currentPos=null;
        vm.showMap=false;
        vm.currentPosition=false;
        vm.searchValue="";
        vm.eventos = [];

        //ACA VA EL ID POSTA HUE SUAREZ
        vm.miId=2;
        vm.eventosAgregados={};
        vm.getEventos = getEventos;
        getEventos();


        navigator.geolocation.getCurrentPosition(function (position) {
          if (!vm.currentPosition){
          vm.currentPosition={latitude: position.coords.latitude, longitude:position.coords.longitude};
          vm.map.center=vm.currentPosition;

          var postionEvent={marker :{id: -1,coords:{latitude: position.coords.latitude, longitude:position.coords.longitude},
            icon: {
              url:"http://i.imgur.com/wtWe7dS.png"},
              scaledSize: [30,30 ],
            anchor:[30,30]
            },showOpt:false};
          vm.eventos.push(postionEvent);

          }

        });



        vm.listado={};
        vm.map = {
          center: {latitude: -34.8894797, longitude:-34.889479},
          zoom: 6,

          options: {
            streetViewControl: false,
            mapTypeControl: false,
            scaleControl: false,
            rotateControl: false,
            zoomControl: false,

          },
          markers:[]
        };

      vm.eventoClicked= function(){
        //placeholdererasd
     };


     function misEventos(){

       eventoService.getMisEventos(vm.miId).then(function(success){
         var eventosList=[];
         for (var x in success){
           var xEvento=success[x];
           var xCoords= {latitude:  xEvento.locationX,
             longitude: xEvento.locationY};
           if (xCoords.latitude!=0 || xCoords.longitude!=0){
             var marker = {id: xEvento.id,coords:xCoords,};
             xEvento.marker=marker;
             xEvento.showOpt=true;
             xEvento.estoInscripto=true;
             vm.eventos.push(xEvento);
             vm.eventosAgregados[xEvento.id]=true;
           }
         }

         console.log(vm.eventos)
         return vm.eventos;
       });


     }



      function getEventos(){

        eventoService.getMisEventos(vm.miId).then(function(success){
          var eventosList=[];
          for (var x in success){
            var xEvento=success[x];
            var xCoords= {latitude:  xEvento.locationX,
              longitude: xEvento.locationY};
            if (xCoords.latitude!=0 || xCoords.longitude!=0){
              var marker = {id: xEvento.id,coords:xCoords,};
              xEvento.marker=marker;
              xEvento.showOpt=true;
              xEvento.estoyInscripto=true;
              vm.eventos.push(xEvento);
              vm.eventosAgregados[xEvento.id]=true;
            }
          }
          eventoService.getEvento().then(function(success){
          var eventosList=[];
          for (var x in success){
            var xEvento=success[x];
            if (!vm.eventosAgregados[xEvento.id]){
              var xCoords= {latitude:  xEvento.locationX,
                           longitude: xEvento.locationY};
              if (xCoords.latitude!=0 || xCoords.longitude!=0){
                var marker = {id: xEvento.id,coords:xCoords,};
                xEvento.marker=marker;
                xEvento.showOpt=true;
                xEvento.estoyInscripto=false;
                vm.eventosAgregados[xEvento.id]=true;
                vm.eventos.push(xEvento);

              }
            }
          }

          console.log(vm.eventos)
          return vm.eventos;
          });
        })
        //    vm.eventos = eventosList;




      }
       // $scope.map=vm.map;
        var keys = ["title", "description"];

        vm.customFilter = function (item) {
          if (!item.showOpt|| vm.searchValue=="") {// your input field is empty
            return true;
          }
          var searchVal =vm.searchValue;
          searchVal = searchVal.replace(/([()[{*+.$^\\|?])/g, '\\$1'); //special char
          var regex = new RegExp('' + searchVal, 'i');
          var key;
          for(var keyIndex in keys) {
            key = keys[keyIndex];
            console.log(key);
          //  if(vm.searchValue[key]) { Seleccion de busquedas
              if (regex.test(item[key]) ) {
                return true;
              }
        //    }
          }
          return false;
        }

    }]);

