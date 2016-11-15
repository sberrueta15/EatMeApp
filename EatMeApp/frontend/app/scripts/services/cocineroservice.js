    'use strict';

    /**
     * @ngdoc service
     * @name EatMeApp.CocineroService
     * @description
     * # CocineroService
     * Service in the EatMeApp.
     */
     angular.module('EatMeApp')
     .service('CocineroService',['$http', '$q', 'store',function ($http, $q, store) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var vm = this;
    var ip = ''
    //var ip = 'http://localhost:5001/'
    var base = 'api/cooker/'
    var service = {
      getCocinero: getCocinero,
      getCurrentCooker: getCurrentCooker,
      updateCocineroInfo: updateCocineroInfo,
      getEventsByCooker: getEventsByCooker,
    }
    return service

    function getCocinero(idCocinero){
      var deferred = $q.defer();
      $http.get(ip+base+idCocinero)
      .success(function(success){
        deferred.resolve(success)
      })
      .error(function(error){
        deferred.reject(error)
      })
      return deferred.promise;
    }

    function getCurrentCooker(){
      var deferred = $q.defer();
      var cooker = store.get('currentCooker');
      if(cooker){
        return cooker
      }else{
        return false
      }
    }

    function updateCocineroInfo(cocinero){
      var deferred = $q.defer()
      $http.put(ip+base+cocinero.id,cocinero)
      .success(function(success){
        deferred.resolve(success)
      })
      .error(function(error){
        deferred.reject(error)
      })
      return deferred.promise;
    }

    function getEventsByCooker(cooker){
      var deferred = $q.defer()
      $http.get(ip+base+cooker.id+'/events')
      .success(function(success){
        deferred.resolve(success)
      })
      .error(function(error){
        deferred.reject(error)
      })
      return deferred.promise;
    }




  }]);
