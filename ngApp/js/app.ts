'use strict';
namespace app {
    angular.module('app', ['ui.router', 'ngResource', 'ngAnimate', 'ngMessages', 'ngMaterial', 'ngAria', 'ngMaterialDatePicker', 'angularMoment'])
        .config((
        $mdThemingProvider,
        $httpProvider: ng.IHttpProvider,
        $stateProvider: ng.ui.IStateProvider,
        $locationProvider: ng.ILocationProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

        $stateProvider.state('Home', {
            url: '/',
            templateUrl: '/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        })
            .state('Register', {
            url: '/register',
            templateUrl: '/templates/register.html',
            controller: 'UserRegistrationController',
            controllerAs: 'vm'
        })
            .state('Login', {
            url: '/login',
            templateUrl: '/templates/login.html',
            controller: 'UserLoginController',
            controllerAs: 'vm'
        })
            .state('Create Event', {
            url: '/create',
            templateUrl: '/templates/create.html',
            controller: 'EventCreateController',
            controllerAs: 'vm'
        })
            .state('My Events', {
            url: '/myevents',
            templateUrl: '/templates/myevents.html',
            controller: 'MyEventController',
            controllerAs: 'vm'
        })
            .state('Update Event', {
            url: '/update/:id',
            templateUrl: '/templates/update.html',
            controller: 'EventUpdateController',
            controllerAs: 'vm'
        })
            .state('Events', {
            url: '/events',
            templateUrl: 'templates/events.html',
            controller: 'EventsController',
            controllerAs: 'vm'
        })
            .state('Event Details', {
            url: '/event/:id',
            templateUrl: 'templates/event.html',
            controller: 'EventDetailController',
            controllerAs: 'vm'
        })
            .state('Attending', {
            url: '/attending',
            templateUrl: '/templates/attending.html',
            controller: 'AttendingEvents',
            controllerAs: 'vm'
        })
            .state('Welcome', {
            url: '/welcome',
            templateUrl: '/templates/welcome.html',
            controller: 'EventsController',
            controllerAs: 'vm'
            })
            .state('tos', {
                url: '/tos',
                templateUrl: 'templates/tos.html'
            })
            .state('privacy', {
                url: '/privacy',
                templateUrl: 'templates/privacy.html'
            });

    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('red');


    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('AuthInterceptor');
});
}
