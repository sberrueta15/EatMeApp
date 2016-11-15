'use strict';

/**
 * @ngdoc function
 * @name comensalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the comensalApp
 */
angular.module('comensalApp')
  .controller('MainCtrl', ['AutenticationService', function (AutenticationService) {
    
  	var vm = this;
  	vm.signOut = signOut;

  	function signOut(){
  		AutenticationService.signOut();
  	}

  }]);
