module.exports = function(app) {
  console.log('Word ik gerequired');
  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('');

    //$locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '../partials/home.html'
      })
      .state('test', {
        url: '/test',
        templateUrl: '../partials/test.html'
      })
      .state('authCallback', {
        url: '/authCallback?oauth_token',
        controller: function($stateParams, $localStorage){
          // TODO: Can't get it to work, routes to localhost:3000/ instead of localhost:3000/#/
          $localStorage.oauth = $stateParams;
          $localStorage.test = "test";
          console.log($stateParams);
        }
      })
  });
}
