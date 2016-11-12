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
    	AutenticationService.signUp(vm.user)
      .then(
        function(data){
          console.log(data)
        },
        function(error){
          console.log("Error",error)
        })
    }
  }]);
