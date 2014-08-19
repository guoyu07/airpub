;(function() {
  angular
    .module('airpub', [
      'ui.bootstrap',
      'ui.router',
      'duoshuo',
      'upyun'
    ]).config(initAirpub);

  function initAirpub($stateProvider, $urlRouterProvider, $locationProvider) {
    // theme configs
    var theme = airpubConfigs.theme || 'chill';
    var themePath = (airpubConfigs.themePath || 'bower_components/') + theme;
    // routes configs
    $urlRouterProvider.otherwise("/404");
    $stateProvider
      .state('home', {
        url: "",
        templateUrl: themePath + "/archive.html",
        controller: 'archive'
      })
      .state('index', {
        url: "/",
        templateUrl: themePath + "/archive.html",
        controller: 'archive'
      })
      .state('pager', {
        url: "/page/:page",
        templateUrl: themePath + "/archive.html",
        controller: 'archive'
      })
      .state('single', {
        url: "/article/:uri",
        templateUrl: themePath + "/single.html",
        controller: 'single'
      })
      .state('create', {
        url: "/create",
        templateUrl: themePath + "/admin.html",
        controller: 'admin'
      })
      .state('update', {
        url: "/article/:uri/update",
        templateUrl: themePath + "/admin.html",
        controller: 'admin'
      })
      .state('404', {
        url: "/404",
        templateUrl: themePath + "/404.html"
      });
    // hashtag config
    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');
  }
})();