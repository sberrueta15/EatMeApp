'use strict';
/**
 * @ngdoc service
 * @name comensalApp.eventoService
 * @description
 * # eventoService
 * Service in the comensalApp.
 */
angular.module('comensalApp')
  .service('eventoService',['$http','$q',  function ($http,$q) {

    var vm = this;
    vm.ip = 'http://localhost:5001/'
    //vm.ip = 'http://54.70.143.222:5001/'

    vm.base = 'api/event';
    var service = {
      getMisEventos: getMisEventos,
      getEvento: getEvento,
      Inscribirse:Inscribirse,
    }
    return service

    function Inscribirse(idEvento,idComensal,evento){
      var deferred = $q.defer();

      $http.put(vm.ip+vm.base+"/asignarcomensal/"+idComensal+"/"+idEvento)
        .success(function(success){
          deferred.resolve(success);
        })
        .error(function(error){
          console.log("error");
          deferred.reject(error);
        })

      return deferred.promise;
    }

    function getEvento(){
      var deferred = $q.defer();
      $http.get(vm.ip+vm.base)
        .success(function(success){
          deferred.resolve(success);
        })
        .error(function(error){
          deferred.reject(error);
        })
      return deferred.promise;
    }

    function getMisEventos(idComensal){
      var base="api/commensal/"+idComensal+"/events";
      var deferred = $q.defer();
      $http.get(vm.ip + base)
        .success(function(success){
          deferred.resolve(success);
        })
        .error(function(error){
          console.log("error");
          deferred.reject(error);
        })
      return deferred.promise;
    }

  }]);
