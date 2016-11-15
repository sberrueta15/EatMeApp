'use strict';

/**
 * @ngdoc service
 * @name comensalApp.AutenticationService
 * @description
 * # AutenticationService
 * Service in the comensalApp.
 */
angular.module('comensalApp')
  .service('AutenticationService',['$http','$q','store','$state', function ($http, $q, store, $state) {
    

     var services = {
  	isAuthenticated: isAuthenticated,
   	login: login,
   	signUp: signUp, 
    signOut: signOut
   }

   var vm = this;
   //var ip = ''
   vm.ip = 'http://localhost:5001'
   //vm.ip = 'http://54.70.143.222:5001'
   vm.base = "/api"
   vm.app = {app:'commensal'}

   function login(user){
    var data = angular.extend({},user,vm.app);
    var deferred = $q.defer();
      $http.post(vm.ip+vm.base+'/login',data)
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
      $http.post(vm.ip+vm.base+'/commensal',data)
        .success(function(success){
          deferred.resolve(success)
  })
        .error(function(error){
        deferred.reject(error)
    })

    return deferred.promise;
    }

    function signOut(){
      store.remove('currentCommensal')
      store.remove('access_token')
      $state.go('home',{},{reload:true})
    }

    function isAuthenticated(){
      var currentCommensal = store.get('currentCommensal')
      var access_token = store.get('access_token')

      if(currentCommensal && access_token){return true}
      else return false
    }


       return services

  }]);
