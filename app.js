let app = angular.module('myapp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/myhome');

    $stateProvider
        .state('myhome', {
            url: '/myhome',
            template: '<myhome class="col-xl-12 col-lg-12 col-md-12 col-sm-12"></myhome>'
        })
        .state('info', {
            url: '/weather-info',
            template: '<weather-info></weather-info>'
        })
});

app.controller('mainctrl', function() {
    this.hello = '';
});
