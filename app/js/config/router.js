module.exports = function(app) {
  console.log('Word ik gerequired');
  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('');

    //$locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/home?username',
        templateUrl: '../partials/home.html'
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
      // Abstract parent state. Preload set to true
      .state('sidebar', {
        abstract: true,
        views: {
          sidebar: { template: '<div ui-view></div>' }
        }
      })
      .state('sidebar.loggedIn', {
        templateUrl: '../partials/sidebar.html'
      });

    $stateProvider
      .state('wrapper', {
        abstract: true,
        views: {
          wrapper: { template: 'div ui-view></div>' }
        }
      })
      .state('content', {
        template: '<pre>TEST</pre>'
      })
  });
}
