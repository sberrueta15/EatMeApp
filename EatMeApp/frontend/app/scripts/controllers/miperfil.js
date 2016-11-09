'use strict';

/**
* @ngdoc function
* @name EatMeApp.controller:MiperfilCtrl
* @description
* # MiperfilCtrl
* Controller of the EatMeApp
*/
angular.module('EatMeApp')
.controller('MiperfilCtrl',['CocineroService','$timeout', function (CocineroService,$timeout) {

  var vm = this;
  vm.idCocinero = 1;
  vm.updateCocineroInfo = updateCocineroInfo;
  vm.guardarMsj = "Guardando";
  vm.guardarMostrar = false;

  vm.miperfil = {}
  vm.ta_toolbar = "[['bold','italics','underline'],['ul','ol']]"

  CocineroService.getCocinero(vm.idCocinero)
  .then(
    function(success){
      vm.miperfil = success
      console.log(success)
      console.log("el cocinero!")

    },
    function(error){
      console.log("error en traer el cocinero");
      console.log(error)
    }
  )


  function updateCocineroInfo(){
    vm.guardarMostrar = true;
    CocineroService.updateCocineroInfo(vm.miperfil)
    .then(
      function(success){
        vm.guardarMsj = "Guardado";
        $timeout(function () {
        vm.guardarMostrar=false;
    }, 2000);
      },
      function(error) {
        vm.guardarMsj = "Error al guardar";
        $timeout(function () {
        vm.guardarMostrar = false;
        }, 2000);
        console.log(error)
      }
    )
  }


}]);
