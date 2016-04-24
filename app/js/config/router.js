module.exports = function(app) {
  console.log('Word ik gerequired');
  app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

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
      .state('games', {
        url: '/games',
        templateUrl: '../partials/games.html',
        controller: 'GameCtrl as gameCtrl'
      })
      .state('newGame', {
        url: '/newGame',
        templateUrl: '../partials/new-game.html',
        controller: 'GameCtrl as gameCtrl'
      })
      .state('myGames', {
        url: '/myGames',
        templateUrl: '../partials/my-games.html',
        controller: 'GameCtrl as gameCtrl'
      })
      // Abstract parent state. Preload set to true
      // .state('sidebar', {
      //   abstract: true,
      //   views: {
      //     sidebar: { template: '<div ui-view></div>' }
      //   }
      // })
      // .state('sidebar.loggedIn', {
      //   templateUrl: '../partials/sidebar.html'
      // });

    // $stateProvider
    //   .state('wrapper', {
    //     abstract: true,
    //     views: {
    //       wrapper: { template: 'div ui-view></div>' }
    //     }
    //   })
    //   .state('content', {
    //     template: '<pre>TEST</pre>'
    //   })

    $httpProvider.interceptors.push(require('../services/httpInterceptor'));
  });


}
