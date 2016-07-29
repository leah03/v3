'use strict';
angular.module('v3App')
.factory('ClusterService',['$resource','setting','$http',function($resource,setting,$http){
	var getCluster=function(){};
	var getClusterProgress=function(){};
	var getAdapters=function(){
		console.log("get adapter ")
	};

	return{
			getCluster:getCluster,
			getClusterProgress:getClusterProgress,
			getAdapters:getAdapters
}
}]
)
