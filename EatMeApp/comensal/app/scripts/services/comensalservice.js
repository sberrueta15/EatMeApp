'use strict';

/**
 * @ngdoc service
 * @name comensalApp.ComensalService
 * @description
 * # ComensalService
 * Service in the comensalApp.
 */
angular.module('comensalApp')
  .service('ComensalService',['$http', '$q', 'store',function ($http, $q, store) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var vm = this;
    //var ip = ''
    vm.ip = 'http://localhost:5001/'
    //vm.ip = 'http://54.70.143.222:5001/'
    vm.base = 'api/commensal/'
    var service = {
      getCommensal: getCommensal,
      getCurrentCommensal: getCurrentCommensal,
      updateCommensalInfo: updateCommensalInfo,
    }
    return service

    function getCommensal(idComensal){
      var deferred = $q.defer();
      $http.get(vm.ip+vm.base+idComensal)
      .success(function(success){
        deferred.resolve(success)
      })
      .error(function(error){
        deferred.reject(error)
      })
      return deferred.promise;
    }

    function getCurrentCommensal(){
      var deferred = $q.defer();
      var commensal = store.get('currentCommensal');
      if(commensal){
        return commensal
      }else{
        return false
      }
    }

    function updateCommensalInfo(commensal){
      var deferred = $q.defer()
      $http.put(vm.ip+vm.base+commensal.id,commensal)
      .success(function(success){
        deferred.resolve(success)
      })
      .error(function(error){
        deferred.reject(error)
      })
      return deferred.promise;
    }

  



  }]);
