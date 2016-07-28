'use strict'; 

angular.module('v3App') 
.controller('ClusterListController',['$scope','ClusterService','$state','ngTableParams','$modal','allClusterData',function($scope,ClusterService,$state,ngTableParams,$modal,allClusterData){

	$scope.state=$state;
	//to-do, what is allclusterData
	ClusterService.getClusterProgress(allClusterData);
	$scope.clusters=allclusterData
	data=$scope.clusters;

	$scope.tableParams=new ngTableParams();

	$scope.goToCluster=function(id,state){
		clusterService.goToCluster(id,state);
	}

}])
.controller('CreateClusterController',['$scope','ClusterService','$modal',function($scope,ClusterService,$modal){
	
		clusterService.getAdalpters($scope);
		$scope.open= function(){
			$scope.cluster={};
			modalInstance = $modal.open({
				templateUrl:'app/views/modalClusterCreate.tp.html',
				controller:'newClusterModalController',
				resolve:{
					allAdaptes:function(){
						return $scope.allAdapters;
					},
					cluster:function(){
						return $scope.cluster;
					}
				}});
			modalInstance.result.then(function(cluster){
				$scope.cluster=cluster;
				postClusterData=function(){
					name:"";
					adapter_id:"";
					os_id:"";
				};
				//postClusterData.flavor_id=cluster.flavor if cluster.flavor
				clusterService.createCluster($scope, postClusterData);
				conosle.log("dismiss");
			});ß
	}
}])
.controller('ClusterModalController',['$scope','ClusterService','$modalInstance','allAdapters','cluster',function($scope,ClusterService,$modal,allAdapters,cluster){
	$scope.allAdapters=allAdapters;
	$scope.cluster=cluster;
	$scope.updateSelectedAdapter=function(){
		for (adapter in $scope.allAdapters){
			if (adapter.id == $scope.cluster.adapter.id){
				$scope.supported_oses=adapter.supported_oses;
				$scope.flavors = adapter.flavors;
			}
		}
	}
	$scope.cancel=function(){
		$modalInstance.dismiss('cancel');
	}
	$scope.ok=function(){
		$scope.result='ok';
		$modalInstance.close($scope.cluster);
	}









}])