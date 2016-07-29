'use strict'; 

angular.module('v3App') 
.controller('ClusterListController',['$scope','ClusterService','$state','NgTableParams','$uibModal','allClusterData',function($scope,ClusterService,$state,NgTableParams,$uibModal,allClusterData){

	$scope.state=$state;
	//mock
	allClusterData={"name":"cluster"};
	
	ClusterService.getClusterProgress(allClusterData);
	$scope.clusters=allClusterData;
	//data=$scope.clusters;

	$scope.tableParams=new NgTableParams();

	$scope.goToCluster=function(id,state){
		clusterService.goToCluster(id,state);
	}

}])
.controller('CreateClusterController',['$scope','ClusterService','$uibModal',function($scope,ClusterService,$uibModal){
	
		ClusterService.getAdapters($scope);
		$scope.open= function(){

			$scope.cluster={};
			var modalInstance = $uibModal.open({
				templateUrl:'/views/createClusterModal.html',
				controller:'ClusterModalController',
				resolve:{
					allAdapters:function(){
						
						return $scope.allAdapters;
					},
					cluster:function(){
						return $scope.cluster;
					}
				}});
			modalInstance.result.then(function(cluster){
				$scope.cluster=cluster;
				console.log(cluster);
				postClusterData=function(){
					name:"";
					adapter_id:"";
					os_id:"";
				};
				//postClusterData.flavor_id=cluster.flavor if cluster.flavor
				//clusterService.createCluster($scope, postClusterData);
				conosle.log("dismiss");
			});
	}
}])
.controller('ClusterModalController',['$scope','ClusterService','$uibModalInstance','allAdapters','cluster',function($scope,ClusterService,$uibModalInstance,allAdapters,cluster){
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
		$uibModalInstance.dismiss('cancel');
	}
	$scope.ok=function(){
		$scope.result='ok';
		$uibModalInstance.close($scope.cluster);
	}









}])