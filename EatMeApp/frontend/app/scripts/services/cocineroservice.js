    'use strict';

    /**
     * @ngdoc service
     * @name EatMeApp.CocineroService
     * @description
     * # CocineroService
     * Service in the EatMeApp.
     */
    angular.module('EatMeApp')
      .service('CocineroService',['$http', '$q', function ($http, $q) {
        // AngularJS will instantiate a singleton by calling "new" on this function
    var vm = this;
    //var ip = 'http://127.0.0.1:3000/'
    var base = 'api/cooker/'
    var service = {
      getCocinero: getCocinero,
      updateCocineroInfo: updateCocineroInfo,
    }
    return service

    function getCocinero(idCocinero){
    var deferred = $q.defer();
      $http.get(base+idCocinero)
        .success(function(success){
          deferred.resolve(success)
  })
        .error(function(error){
        deferred.reject(error)
    })

    return deferred.promise;
    }

  function updateCocineroInfo(cocinero){
  var deferred = $q.defer()
  $http.put(base+cocinero.id,cocinero)
      .success(function(success){
        deferred.resolve(success)
  })
      .error(function(error){
        deferred.reject(error)
})
    return deferred.promise;
  }

      }]);
