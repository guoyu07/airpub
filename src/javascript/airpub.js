// signup app
var airpub = angular.module('airpub', [
  'angular-medium-editor',
  'ui.bootstrap',
  'ui.router',
  'duoshuo',
  'snap',
  'upyun'
]);

// angular plugins configs
airpub.config(function($stateProvider, $urlRouterProvider, snapRemoteProvider) {
  // ui configs
  snapRemoteProvider.globalOptions.disable = 'right';
  // routes configs
  $urlRouterProvider.otherwise("/404");
  $stateProvider
    .state('home', {
      url: "",
      templateUrl: "views/archive.html",
      controller: 'archive'
    })
    .state('index', {
      url: "/",
      templateUrl: "views/archive.html",
      controller: 'archive'
    })
    .state('single', {
      url: "/article/:uri",
      templateUrl: "views/single.html",
      controller: 'single'
    })
    .state('404', {
      url: "/404",
      templateUrl: "views/404.html"
    })
    .state('admin', {
      url: "/admin",
      templateUrl: "views/admin.html",
      controller: 'admin'
    })
});
