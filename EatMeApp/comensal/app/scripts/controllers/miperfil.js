'use strict';

/**
 * @ngdoc function
 * @name comensalApp.controller:MiperfilCtrl
 * @description
 * # MiperfilCtrl
 * Controller of the comensalApp
 */
angular.module('comensalApp')
  .controller('MiperfilCtrl', ['ComensalService','$timeout', function (ComensalService,$timeout) {

  var vm = this;
  vm.idCommensal = ComensalService.getCurrentCommensal().id;
  vm.updateCommensalInfo = updateCommensalInfo;
  vm.guardarMsj = "Guardando";
  vm.guardarMostrar = false;

  vm.miperfil = {}
  vm.ta_toolbar = "[['bold','italics','underline'],['ul','ol']]"

  ComensalService.getCommensal(vm.idCommensal)
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


  function updateCommensalInfo(){
    vm.guardarMostrar = true;
    ComensalService.updateCommensalInfo(vm.miperfil)
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
