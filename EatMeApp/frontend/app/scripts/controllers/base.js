'use strict';

/**
 * @ngdoc function
 * @name EatMeApp.controller:BaseCtrl
 * @description
 * # BaseCtrl
 * Controller of the EatMeApp
 */
angular.module('EatMeApp')
  .controller('BaseCtrl',['AutenticationService', function (AutenticationService) {
    
  	var vm = this;
  	vm.signOut = signOut;

  	function signOut(){
  		AutenticationService.signOut();
  	}

  }]);
