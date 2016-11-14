'use strict';

angular.module('comensalApp')
  .service('eventoService',['$http','$q',  function ($http,$q) {

    //var ip = 'http://127.0.0.1:3000/'
    var base = 'api/evento'
    var service = {
      crearEvento: crearEvento,
      getEvento: getEvento,
    }
    return service

    function Inscribirse(evento){
      var deferred = $q.defer();
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

    function getMisEventos(){
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
