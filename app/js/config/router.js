module.exports = function(app) {
  console.log('Word ik gerequired');
  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('');

    //$locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/home?username',
        templateUrl: '../partials/home.html',
        controller: function($stateParams){
          console.log($stateParams);
        }
      })
      .state('test', {
        url: '/test',
        templateUrl: '../partials/test.html'
      })
      .state('authCallback', {
        url: '/authCallback?username&token',
        templateUrl: '../partials/auth.html',
        controller: 'AuthCtrl'
      })
  });
}
