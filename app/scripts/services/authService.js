'use strict';
angular.module('v3App')
.factory('Auth',['$resource','setting','$http',function($resource,setting,$http){

	return function(credential){
	credential={"email":"admin@huawei.com","password":"admin","remember":"false"};
	//	var login=$resource(setting.apiUrlBase+'/users/login',angular.toJson(credential));
	//	var result=login.save();
var result=$http.post(setting.apiUrlBase + '/users/login', angular.toJson(credential));
	//	console.log(credential);
	return result;
		console.log(result);
	}


}]
)
