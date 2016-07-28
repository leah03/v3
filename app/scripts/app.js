'use strict';

/**
 * @ngdoc overview
 * @name v3App
 * @description
 * # v3App
 *
 * Main module of the application.
 */
angular
  .module('v3App', [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])




  .constant('setting', {
    apiUrlBase: 'http://10.145.250.56/api',
    metadataUrlBase: '/data',
    monitoringUrlBase: '/monit/api/v1' 

  })


.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
])

  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state('login', {
        url:'/login',
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
        .state('clusterList', {
        url:'/clusterList',
        templateUrl: 'views/cluster-all.html',
        controller: 'ClusterListController'
      })
        .state('wizard', {
        url:'/wizard/{id}?config',
        templateUrl: 'views/wizard.html',
        controller: 'wizardController'
      })
        .state('cluster', {
        url:'/cluster/{id}',
        templateUrl: 'views/cluster.html',
        controller: 'clusterController'
      })
        .state('cluster.overview', {
        url:'/overview',
        templateUrl: 'views/cluster-overview.html',
        controller: 'clusterProgressController'
      })
        .state('cluster.config', {
        url:'/config',
        templateUrl: 'views/cluster-config.html',
        controller: 'clusterConfigController'
      })
        .state('cluster.config.security', {
        url:'/security',
        templateUrl: 'views/cluster-security.html',
        controller: 'clusterSecurityController'
      })
        .state('cluster.config.network', {
        url:'/network',
        templateUrl: 'views/clusterNetwork.html',
        controller: 'clusterNetworkController'
      })
        .state('cluster.config.partition', {
        url:'/partition',
        templateUrl: 'views/clusterPartition.html',
        controller: 'clusterPartitionController'
      })
        .state('cluster.config.roles', {
        url:'/roles',
        templateUrl: 'views/clusterRoles.html',
        controller: 'clusterRolesController'
      })
        .state('cluster.config.report', {
        url:'/report',
        templateUrl: 'views/clusterReport.html',
        controller: 'clusterReportController'
      })
        .state('serverList', {
        url:'/serverlist',
        templateUrl: 'views/serverList.html',
        controller: 'serverListController'
      })
        .state('useSetting', {
        url:'/usersetting',
        templateUrl: 'views/userSetting.html',
        controller: 'userSettingController'
      });
      })


  .controller('AppController', ['$scope', function($scope){
 
    $scope.isAuthenticated=true;
  }])


    .controller('ClusterController', ['$scope', function($scope){
      $scope.greeting="cluster";
 }]);




