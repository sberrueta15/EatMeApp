'use strict';

/**
 * @ngdoc service
 * @name EatMeApp.eventoService
 * @description
 * # eventoService
 * Service in the EatMeApp.
 */
angular.module('EatMeApp')
  .service('eventoService',['$http','$q',  function ($http,$q) {

    var base = 'api/evento'
    var service = {
      crearEvento: crearEvento,
      getEvento: getEvento,
    }
    return service

    function crearEvento(evento){
      var deferred = $q.defer();
      $http.post(base, evento)
        .success(function(success){
          deferred.resolve(success);
        })
        .error(function(error){
          deferred.reject(error);
        })

        return deferred.promise;
    }

    function getEvento(){
      var deferred = $q.defer();
      $http.get(base)
        .success(function(success){
          deferred.resolve(success);
        })
        .error(function(error){
          deferred.reject(error);
        })
        return deferred.promise;
    }



  }]);
