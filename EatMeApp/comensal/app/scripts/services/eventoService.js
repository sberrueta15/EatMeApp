'use strict';

angular.module('comensalApp')
  .service('eventoService',['$http','$q',  function ($http,$q) {

    //var ip = 'http://127.0.0.1:3000/'

    var base = 'api/event';
    var service = {
      getMisEventos: getMisEventos,
      getEvento: getEvento,
      Inscribirse:Inscribirse,
    }
    return service

    function Inscribirse(idEvento,idComensal){
      var deferred = $q.defer();
      base="/api/event/asignarcomensal/"+idComensal+"/"+idEvento;

      $http.post(base, evento)
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
      base = 'api/event';
      console.log("getEvento");
      var deferred = $q.defer();
      console.log("waffles")
      console.log(base)
      $http.get(base)
        .success(function(success){
          deferred.resolve(success);
        })
        .error(function(error){
          console.log("error");
          deferred.reject(error);
        })
      return deferred.promise;
    }

    function getMisEventos(idComensal){
      base="/api/commensal/"+idComensal+"/events";
      console.log("getEvento");
      var deferred = $q.defer();
      $http.get(base)
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
