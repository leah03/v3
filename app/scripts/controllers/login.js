'use strict';

/**
 * @ngdoc function
 * @name v3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the v3App
 */
angular.module('v3App')
  .controller('LoginController', ['$scope','$state','Auth', function ($scope,$state,Auth) {

  	$scope.alerts=[];
  	$scope.credential={
  		email:$scope.email,
  		password:$scope.password,
  		isRemember:$scope.remember
  	}
  	$scope.login=function(credential){
  		
  		Auth($scope.credential).then(function(response){
  			console.log(response);
  			$state.transitionTo("clusterList");

  		},function(error){
  			$scope.alert.push(error.message);
  		})

  		
  

  	};
    
    
  }]);
