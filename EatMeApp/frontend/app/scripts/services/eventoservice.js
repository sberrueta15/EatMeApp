'use strict';

/**
 * @ngdoc service
 * @name EatMeApp.eventoService
 * @description
 * # eventoService
 * Service in the EatMeApp.
 */
angular.module('EatMeApp')
  .service('eventoService',['CocineroService','$http','$q',  function (CocineroService, $http, $q ) {

    //var ip = 'http://127.0.0.1:3000/'
    var base = 'api/event'
    var service = {
      crearEvento: crearEvento,
      getEvento: getEvento,
    }
    return service

    var vm = this;

    function crearEvento(evento){
      var deferred = $q.defer();
      $http.post(base+'/cooker/'+CocineroService.getCurrentCooker().id, evento)
        .success(function(success){
          deferred.resolve(success);
        })
        .error(function(error){
          deferred.reject(error);
        })

        return deferred.promise;
    }

    function getEvento(id){
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
