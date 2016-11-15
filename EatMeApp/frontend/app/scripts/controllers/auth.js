'use strict';

/**
 * @ngdoc function
 * @name EatMeApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the EatMeApp
 */
 angular.module('EatMeApp')
 .controller('AuthCtrl',['AutenticationService','store','$state', function (AutenticationService,store,$state) {

  var vm = this;

    // ------------------------------------------------
    // Functions
    // ------------------------------------------------
    
    vm.login = login;
    vm.signUp = signUp;




    function login(){
    	AutenticationService.login(vm.user)
      .then(
        function(data){
          store.set('access_token',data.access_token)
          store.set('currentCooker',data.user)
          console.log(angular.element(document.querySelector('#login-modal')))
          $state.go('chef.dashboard',{},{reload:true})
        },
        function(error){
          console.log("Error",error)
        })
    }
    


    function signUp(){
      if(vm.user.pass1 == vm.user.pass2){
        vm.user.password = vm.user.pass1;

        AutenticationService.signUp(vm.user)
      .then(
        function(data){
        var obj = {}
        obj.username = vm.user.username;
        obj.password = vm.user.password;

        AutenticationService.login(vm.user)
      .then(
        function(data){
          store.set('access_token',data.access_token)
          store.set('currentCooker',data.user)
          console.log(angular.element(document.querySelector('#login-modal')))
          $state.go('chef.dashboard',{},{reload:true})
        },
        function(error){
          console.log("Error",error)
        })
        },
        function(error){
          console.log("Error",error)
        })
      }
    	
    }
  }]);
