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

    var vm = this;
    //vm.ip = 'http://54.70.143.222:5001/'
    vm.ip = 'http://localhost:5001/'

    var base = 'api/event'
    var service = {
      crearEvento: crearEvento,
      getEvento: getEvento,
    }
    return service

    
    


    function crearEvento(evento){
      var deferred = $q.defer();
      $http.post(vm.ip+base+'/cooker/'+CocineroService.getCurrentCooker().id, evento)
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
      $http.get(vm.ip+base)
        .success(function(success){
          deferred.resolve(success);
        })
        .error(function(error){
          deferred.reject(error);
        })
        return deferred.promise;
    }



  }]);
