'use strict';

/**
 * @ngdoc service
 * @name EatMeApp.AutenticationService
 * @description
 * # AutenticationService
 * Service in the EatMeApp.
 */
angular.module('EatMeApp')
  .service('AutenticationService', ['$http', '$q','store','$state', function ($http, $q,store,$state) {
   var services = {
  	isAuthenticated: isAuthenticated,
   	login: login,
   	signUp: signUp, 
    signOut: signOut
   }

   var vm = this;
   vm.base = "/api"
   vm.app = {app:'cooker'}

   function login(user){
    var data = angular.extend({},user,vm.app);
    var deferred = $q.defer();
      $http.post(vm.base+'/login',data)
        .success(function(success){
          deferred.resolve(success)
  })
        .error(function(error){
        deferred.reject(error)
    })

    return deferred.promise;
    }


    function signUp(user){
    var data = angular.extend({},user,vm.app);
    var deferred = $q.defer();
      $http.post(vm.base+'/signup',data)
        .success(function(success){
          deferred.resolve(success)
  })
        .error(function(error){
        deferred.reject(error)
    })

    return deferred.promise;
    }

    function signOut(){
      store.remove('currentCooker')
      store.remove('access_token')
      $state.go('home',{},{reload:true})
    }

    function isAuthenticated(){
      var currentCooker = store.get('currentCooker')
      var access_token = store.get('access_token')

      if(currentCooker && access_token){return true}
      else return false
    }


       return services


  }]);
