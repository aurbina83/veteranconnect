'use strict';
var app;
(function (app) {
    angular.module('app', ['ui.router', 'ngResource', 'ngAnimate', 'ngMessages', 'ngMaterial', 'ngAria', 'ngMaterialDatePicker', 'ngSanitize', 'angularMoment', 'oitozero.ngSweetAlert'])
        .config(function ($mdThemingProvider, $compileProvider, $httpProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
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
            controller: 'WelcomeController',
            controllerAs: 'vm'
        })
            .state('Hold', {
            url: '/hold',
            templateUrl: '/templates/hold.html',
            controller: 'HoldingController',
            controllerAs: 'vm'
        })
            .state('Verify', {
            url: '/verify',
            templateUrl: '/templates/verify.html',
            controller: 'VerifyController',
            controllerAs: 'vm'
        })
            .state('Verified', {
            url: '/verified',
            templateUrl: '/templates/verified.html',
            controller: 'VerifiedController',
            controllerAs: 'vm'
        })
            .state('Pending', {
            url: '/pending',
            templateUrl: '/templates/pending.html'
        });
        $mdThemingProvider.theme('success')
            .primaryPalette('green');
        $mdThemingProvider.theme('warning')
            .primaryPalette('red');
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|veteranconnect):/);
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('AuthInterceptor');
    });
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQVUsR0FBRyxDQXdHWjtBQXhHRCxXQUFVLEdBQUcsRUFBQyxDQUFDO0lBQ1gsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLENBQUM7U0FDaEwsTUFBTSxDQUFDLFVBQ0osa0JBQWtCLEVBQ2xCLGdCQUFxQyxFQUNyQyxhQUErQixFQUMvQixjQUFvQyxFQUNwQyxpQkFBdUMsRUFDdkMsa0JBQTRDO1FBRTVDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3pCLEdBQUcsRUFBRSxHQUFHO1lBQ1IsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxVQUFVLEVBQUUsZ0JBQWdCO1lBQzVCLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUM7YUFDRyxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ2YsR0FBRyxFQUFFLFdBQVc7WUFDaEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxVQUFVLEVBQUUsNEJBQTRCO1lBQ3hDLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUM7YUFDRCxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ1osR0FBRyxFQUFFLFFBQVE7WUFDYixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFVBQVUsRUFBRSxxQkFBcUI7WUFDakMsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQzthQUNELEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDbkIsR0FBRyxFQUFFLFNBQVM7WUFDZCxXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFVBQVUsRUFBRSx1QkFBdUI7WUFDbkMsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQzthQUNELEtB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
angular.module('infiniteScroll', [])
    .directive('infiniteScroll', [ "$window", function ($window) {
        return {
            link:function (scope, element, attrs) {
                var offset = parseInt(attrs.threshold) || 0;
                var e = element[0];

                element.bind('scroll', function () {
                    if (scope.$eval(attrs.canLoad) && e.scrollTop + e.offsetHeight >= e.scrollHeight - offset) {
                        scope.$apply(attrs.infiniteScroll);
                    }
                });
            }
        };
    }]);
angular.module('app').directive('navbar', function () { return ({
    templateUrl: '../../templates/nav.html',
    restrict: 'E',
    controller: 'NavController',
    controllerAs: 'nav'
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxjQUFNLE9BQUEsQ0FBQztJQUMvQyxXQUFXLEVBQUUsMEJBQTBCO0lBQ3ZDLFFBQVEsRUFBRSxHQUFHO0lBQ2IsVUFBVSxFQUFFLGVBQWU7SUFDM0IsWUFBWSxFQUFFLEtBQUs7Q0FDcEIsQ0FBQyxFQUw4QyxDQUs5QyxDQUFDLENBQUMifQ==
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var EventCreateController = (function () {
            function EventCreateController(EventService, $state, UserService, $http, ErrorService) {
                this.EventService = EventService;
                this.$state = $state;
                this.UserService = UserService;
                this.$http = $http;
                this.ErrorService = ErrorService;
                this.event = {
                    title: null,
                    name: null,
                    description: null,
                    numGuests: null,
                    /**
                     * loc: [lng, lat]
                     */
                    loc: [null],
                    eventAddress: null,
                    city: null,
                    state: null,
                    dateTime: null
                };
                this.fetch = true;
                this.arr = [];
                // public category = ["Drinks", "Food", "Food-Drinks", "Hunting-Fishing", "Camping-Hiking", "Sports", "Fitness", "Shooting", "Outdoor Recreation", "Indoor Recreation", "Public Event", "Sporting Event", "Music Event"];
                // public categorySelected;
                //Min date for DateTime Picker
                this.date = new Date();
                this.status = UserService.status;
                UserService.userCheck();
                // array of numbers for num guest selection
                for (var i_1 = 2; i_1 < 99; i_1++) {
                    this.arr.push(i_1);
                }
            }
            // //Set Category
            // public setCategory(){
            //     this.event.category = this.categorySelected;
            // }
            //Set Rally Point to the Event
            EventCreateController.prototype.rallyPoint = function (p) {
                this.event.name = p.name;
                this.event.eventAddress = p.location.address;
                this.event.loc = [p.location.coordinate.longitude, p.location.coordinate.latitude];
                this.event.city = p.location.city;
                this.event.state = p.location.state_code;
            };
            //Yelp Search
            EventCreateController.prototype.searchYelp = function () {
                var _this = this;
                this.count = 0;
                this.fetch = false;
                this.$http.get('/api/v1/yelp/search?term=' + this.term + "&location=" +
                    this.location + "&cll=" + this.status.loc[1] + "," + this.status.loc[0] + "&sort=0" + "&offset=" + this.count + "&limit = 20").then(function (res) {
                    _this.places = res.data['businesses'];
                    _this.fetch = true;
                }, function (err) {
                    _this.ErrorService.sweetAlert("Damn!", err.data.message, "warning");
                });
            };
            //Yelp Pagination
            EventCreateController.prototype.moreYelp = function () {
                var _this = this;
                this.count += 20;
                this.fetch = false;
                this.$http.get('/api/v1/yelp/search?term=' + this.term + "&location=" +
                    this.location + "&cll=" + this.status.loc[1] + "," + this.status.loc[0] + "&offset=" + this.count + "&limit = 20").then(function (res) {
                    _this.places = _this.places.concat(res.data['businesses']);
                    _this.fetch = true;
                    _this.count += 20;
                }, function (err) {
                    _this.ErrorService.sweetAlert("Damn!!", err.data.message, "warning");
                });
            };
            /**
             * Submit event
             * @return {[err]} [error message]
             */
            EventCreateController.prototype.submit = function () {
                var _this = this;
                this.EventService.createEvent(this.event).then(function (res) {
                    _this.ErrorService.toast("Event Created!", "success");
                    _this.$state.go("My Events");
                }, function (err) {
                    _this.ErrorService.sweetAlert("Something went wrong!", err.data.message, "warning");
                });
            };
            return EventCreateController;
        }());
        Controllers.EventCreateController = EventCreateController;
        angular.module('app').controller('EventCreateController', EventCreateController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRDcmVhdGVDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRXZlbnRDcmVhdGVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsR0FBRyxDQXlHWjtBQXpHRCxXQUFVLEdBQUc7SUFBQyxJQUFBLFdBQVcsQ0F5R3hCO0lBekdhLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFDdkI7WUF3RkksK0JBQ1ksWUFBdUMsRUFDdkMsTUFBMkIsRUFDM0IsV0FBcUMsRUFDckMsS0FBc0IsRUFDdEIsWUFBdUM7Z0JBSnZDLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtnQkFDdkMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7Z0JBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsVUFBSyxHQUFMLEtBQUssQ0FBaUI7Z0JBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtnQkE1RjVDLFVBQUssR0FBRztvQkFDWCxLQUFLLEVBQUUsSUFBSTtvQkFDWCxJQUFJLEVBQUUsSUFBSTtvQkFDVixXQUFXLEVBQUUsSUFBSTtvQkFDakIsU0FBUyxFQUFFLElBQUk7b0JBQ2Y7O3VCQUVHO29CQUNILEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDWCxZQUFZLEVBQUUsSUFBSTtvQkFDbEIsSUFBSSxFQUFFLElBQUk7b0JBQ1YsS0FBSyxFQUFFLElBQUk7b0JBQ1gsUUFBUSxFQUFFLElBQUk7aUJBQ2pCLENBQUE7Z0JBT00sVUFBSyxHQUFHLElBQUksQ0FBQztnQkFHYixRQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUNoQix5TkFBeU47Z0JBQ3pOLDJCQUEyQjtnQkFFM0IsOEJBQThCO2dCQUN2QixTQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFrRWpCLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDakMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN4QiwyQ0FBMkM7Z0JBQzND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
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var EventDetailController = (function () {
            function EventDetailController(EventService, ErrorService, UserService, CommentService, $state, $stateParams) {
                var _this = this;
                this.EventService = EventService;
                this.ErrorService = ErrorService;
                this.UserService = UserService;
                this.CommentService = CommentService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.isLoading = true;
                this.attending = [];
                EventService.getOne($stateParams['id']).then(function (res) {
                    _this.isLoading = false;
                    _this.event = res;
                    _this.event.attending.map(function (i) {
                        _this.attending.push(i['_id']);
                    });
                    _this.status = UserService.status;
                    UserService.userCheck();
                });
            }
            EventDetailController.prototype.createComment = function () {
                var _this = this;
                this.comment.event = this.event._id;
                this.CommentService.create(this.comment).then(function (res) {
                    _this.$state.reload();
                    _this.comment.message = "";
                }, function (err) {
                    _this.ErrorService.toast(err.data.message, "warning");
                });
            };
            return EventDetailController;
        }());
        Controllers.EventDetailController = EventDetailController;
        angular.module('app').controller('EventDetailController', EventDetailController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnREZXRhaWxzQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkV2ZW50RGV0YWlsc0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxHQUFHLENBdUNaO0FBdkNELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQXVDeEI7SUF2Q2EsV0FBQSxXQUFXLEVBQUMsQ0FBQztRQUN2QjtZQWtCSSwrQkFDWSxZQUF1QyxFQUN2QyxZQUF1QyxFQUN2QyxXQUFxQyxFQUNyQyxjQUEyQyxFQUMzQyxNQUEyQixFQUMzQixZQUF1QztnQkF4QnZELGlCQW9DQztnQkFqQmUsaUJBQVksR0FBWixZQUFZLENBQTJCO2dCQUN2QyxpQkFBWSxHQUFaLFlBQVksQ0FBMkI7Z0JBQ3ZDLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsbUJBQWMsR0FBZCxjQUFjLENBQTZCO2dCQUMzQyxXQUFNLEdBQU4sTUFBTSxDQUFxQjtnQkFDM0IsaUJBQVksR0FBWixZQUFZLENBQTJCO2dCQXBCNUMsY0FBUyxHQUFHLElBQUksQ0FBQztnQkFDakIsY0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFxQmxCLFlBQVksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDN0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO29CQUNqQixLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDO3dCQUN2QixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDbEMsQ0FBQyxDQUFDLENBQUE7b0JBQ0YsS0FBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO29CQUNqQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQztZQTNCTSw2Q0FBYSxHQUFwQjtnQkFBQSxpQkFRQztnQkFQRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzlDLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDOUIsQ0FBQyxFQUFFLFVBQUMsR0FBRztvQkFDSCxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBb0JMLDRCQUFDO1FBQUQsQ0FBQyxBQXBDRCxJQW9DQztRQXBDWSxpQ0FBcUIsd0JBb0NqQyxDQUFBO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUNyRixDQUFDLEVBdkNhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQXVDeEI7QUFBRCxDQUFDLEVBdkNTLEdBQUcsS0FBSCxHQUFHLFFBdUNaIn0=
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var EventUpdateController = (function () {
            function EventUpdateController(EventService, $state, $stateParams, UserService, $http, ErrorService) {
                var _this = this;
                this.EventService = EventService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.UserService = UserService;
                this.$http = $http;
                this.ErrorService = ErrorService;
                this.arr = [];
                this.fetch = true;
                //Min date for DateTime Picker
                this.date = new Date();
                this.status = UserService.status;
                EventService.getOne($stateParams['id']).then(function (res) {
                    _this.event = res;
                }, function (err) {
                    ErrorService.toast(err.data.message, "warning");
                });
                UserService.userCheck();
                for (var i_1 = 2; i_1 <= 100; i_1++) {
                    this.arr.push(i_1);
                }
            }
            //Set Rally Point to the Event
            EventUpdateController.prototype.rallyPoint = function (p) {
                this.event.name = p.name;
                this.event.eventAddress = p.location.display_address;
                this.event.loc = [p.location.coordinate.longitude, p.location.coordinate.latitude];
                this.event.city = p.location.city;
                this.event.state = p.location.state_code;
            };
            //Yelp Search
            EventUpdateController.prototype.searchYelp = function () {
                var _this = this;
                this.count = 0;
                this.fetch = false;
                this.$http.get('/api/v1/yelp/search?term=' + this.term + "&location=" +
                    this.location + "&cll=" + this.status.loc[1] + "," + this.status.loc[0] + "&sort=0" + "&offset=" + this.count + "&limit = 20").then(function (res) {
                    _this.places = res.data['businesses'];
                    _this.fetch = true;
                }, function (err) {
                    _this.ErrorService.sweetAlert("Damn!", err.data.message, "warning");
                });
            };
            //Yelp Pagination
            EventUpdateController.prototype.moreYelp = function () {
                var _this = this;
                this.count += 20;
                this.fetch = false;
                this.$http.get('/api/v1/yelp/search?term=' + this.term + "&location=" +
                    this.location + "&cll=" + this.status.loc[1] + "," + this.status.loc[0] + "&offset=" + this.count + "&limit = 20").then(function (res) {
                    _this.places = _this.places.concat(res.data['businesses']);
                    _this.fetch = true;
                    _this.count += 20;
                }, function (err) {
                    _this.ErrorService.sweetAlert("Damn!!", err.data.message, "warning");
                });
            };
            EventUpdateController.prototype.update = function () {
                var _this = this;
                this.EventService.update(this.event).then(function (res) {
                    _this.ErrorService.toast("Event Updated!", "success");
                    _this.$state.go('My Events');
                }, function (err) {
                    _this.ErrorService.toast(err.data.message, "warning");
                });
            };
            return EventUpdateController;
        }());
        Controllers.EventUpdateController = EventUpdateController;
        angular.module('app').controller('EventUpdateController', EventUpdateController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRVcGRhdGVDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRXZlbnRVcGRhdGVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsR0FBRyxDQXNGWjtBQXRGRCxXQUFVLEdBQUc7SUFBQyxJQUFBLFdBQVcsQ0FzRnhCO0lBdEZhLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFDdkI7WUFnRUksK0JBQ1ksWUFBdUMsRUFDdkMsTUFBMkIsRUFDM0IsWUFBdUMsRUFDdkMsV0FBcUMsRUFDckMsS0FBc0IsRUFDdEIsWUFBdUM7Z0JBdEV2RCxpQkFtRkM7Z0JBbEJlLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtnQkFDdkMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7Z0JBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtnQkFDdkMsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO2dCQUNyQyxVQUFLLEdBQUwsS0FBSyxDQUFpQjtnQkFDdEIsaUJBQVksR0FBWixZQUFZLENBQTJCO2dCQW5FNUMsUUFBRyxHQUFHLEVBQUUsQ0FBQztnQkFNVCxVQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUlwQiw4QkFBOEI7Z0JBQ3ZCLFNBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQTBEckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO2dCQUNqQyxZQUFZLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzdDLEtBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNyQixDQUFDLEVBQUUsVUFBQyxHQUFHO29CQUNILFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3BELENBQUMsQ0FBQyxDQUFDO2dCQUNILFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztn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
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var AttendingEvents = (function () {
            function AttendingEvents(EventService, UserService, $state, ErrorService) {
                var _this = this;
                this.EventService = EventService;
                this.UserService = UserService;
                this.$state = $state;
                this.ErrorService = ErrorService;
                this.isLoading = true;
                this.status = UserService.status;
                UserService.userCheck();
                EventService.getAttending(this.status._id).then(function (res) {
                    _this.events = res;
                    _this.isLoading = false;
                }, function (err) {
                    ErrorService.toast(err.data.message, "warning");
                });
            }
            AttendingEvents.prototype.notAttending = function (e) {
                var _this = this;
                this.EventService.notAttending(e._id).then(function (res) {
                    _this.ErrorService.toast("You're Out!", "success");
                    _this.events.splice(_this.events.indexOf(e), 1);
                }, function (err) {
                    _this.ErrorService.toast(err.data.message, "warning");
                });
            };
            AttendingEvents.prototype.go = function (e) {
                this.$state.go('Event Details', { id: e._id });
            };
            return AttendingEvents;
        }());
        Controllers.AttendingEvents = AttendingEvents;
        angular.module('app').controller('AttendingEvents', AttendingEvents);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzQXR0ZW5kaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRXZlbnRzQXR0ZW5kaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsR0FBRyxDQStCWjtBQS9CRCxXQUFVLEdBQUc7SUFBQyxJQUFBLFdBQVcsQ0ErQnhCO0lBL0JhLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFDdkI7WUFrQkkseUJBQW9CLFlBQXVDLEVBQVUsV0FBcUMsRUFBVSxNQUEyQixFQUFVLFlBQXVDO2dCQWxCcE0saUJBNEJDO2dCQVZ1QixpQkFBWSxHQUFaLFlBQVksQ0FBMkI7Z0JBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO2dCQUFVLFdBQU0sR0FBTixNQUFNLENBQXFCO2dCQUFVLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtnQkFmekwsY0FBUyxHQUFHLElBQUksQ0FBQztnQkFnQnBCLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDakMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN4QixZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDaEQsS0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ2xCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixDQUFDLEVBQUUsVUFBQyxHQUFHO29CQUNILFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3BELENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQztZQXRCTSxzQ0FBWSxHQUFuQixVQUFvQixDQUFlO2dCQUFuQyxpQkFPQztnQkFORyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDM0MsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNsRCxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbEQsQ0FBQyxFQUFFLFVBQUMsR0FBRztvQkFDSCxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDO1lBRU0sNEJBQUUsR0FBVCxVQUFVLENBQUM7Z0JBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLEVBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1lBQ2pELENBQUM7WUFZTCxzQkFBQztRQUFELENBQUMsQUE1QkQsSUE0QkM7UUE1QlksMkJBQWUsa0JBNEIzQixDQUFBO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDekUsQ0FBQyxFQS9CYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUErQnhCO0FBQUQsQ0FBQyxFQS9CUyxHQUFHLEtBQUgsR0FBRyxRQStCWiJ9
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var EventsController = (function () {
            function EventsController(EventService, $scope, UserService, $mdDialog, $state, ErrorService) {
                var _this = this;
                this.EventService = EventService;
                this.$scope = $scope;
                this.UserService = UserService;
                this.$mdDialog = $mdDialog;
                this.$state = $state;
                this.ErrorService = ErrorService;
                this.fetch = true;
                this.distance = 15;
                this.status = EventService.status;
                UserService.userCheck();
                UserService.status.maxDist = 24;
                EventService.getAll({ lng: this.status.loc[0], lat: this.status.loc[1], maxDist: this.status.maxDist }).then(function (res) {
                    _this.events = res;
                    if (_this.events.length == 0) {
                        ErrorService.sweetAlertEvents("DRY HOLE", "Looks like there aren't any events in your AO. Try adjusting the search radius above, or creating an event for your area!.", "Create Event");
                    }
                    _this.fetch = false;
                }, function (err) {
                    ErrorService.sweetAlert("Error", "Sorry, we're all ate up right now. Try reloading the page or checking back later.", "error");
                });
                $scope.$watch(function () { return _this.status; }, function (newValue, oldValue) {
                    _this.fetch = true;
                    if (newValue !== oldValue) {
                        EventService.getAll({ lng: _this.status.loc[0], lat: _this.status.loc[1], maxDist: _this.status.maxDist }).then(function (res) {
                            _this.events = res;
                            _this.fetch = false;
                        }, function (err) {
                            ErrorService.sweetAlert("Error", "Sorry, we're all ate up right now. Try reloading the page or checking back later.", "error");
                        });
                    }
                }, true);
            }
            EventsController.prototype.showAlert = function () {
                this.ErrorService.sweetAlert("Slow down there, High Speed!", "You're already in this event. Pop smoke", "warning");
            };
            ;
            EventsController.prototype.setDistance = function () {
                this.status.maxDist = this.distance * 1.6;
            };
            EventsController.prototype.attend = function (e) {
                var _this = this;
                for (var i_1 = 0; i_1 < e.attending.length; i_1++) {
                    if (e.attending[i_1]._id == this.status._id) {
                        return this.showAlert();
                    }
                }
                this.EventService.attending(e._id).then(function () {
                    _this.ErrorService.toast("You're in!", "success");
                    _this.$state.go('Attending');
                }, function (err) {
                    _this.ErrorService.sweetAlertReload("Draggin ass!", err.data.message);
                });
            };
            ///$mdDialog
            EventsController.prototype.details = function (e) {
                this.$mdDialog.show({
                    locals: { e: e },
                    controller: "DialogController as vm",
                    templateUrl: '/templates/details.html',
                    clickOutsideToClose: true,
                });
            };
            ;
            return EventsController;
        }());
        Controllers.EventsController = EventsController;
        angular.module('app').controller('EventsController', EventsController);
        var DiaglogController = (function () {
            function DiaglogController($mdDialog, e) {
                this.$mdDialog = $mdDialog;
                this.e = e;
                this.event = this.e;
            }
            DiaglogController.prototype.cancel = function () {
                this.$mdDialog.cancel();
            };
            ;
            return DiaglogController;
        }());
        Controllers.DiaglogController = DiaglogController;
        angular.module('app').controller("DialogController", DiaglogController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkV2ZW50c0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxHQUFHLENBZ0ZaO0FBaEZELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQWdGeEI7SUFoRmEsV0FBQSxXQUFXLEVBQUEsQ0FBQztRQUN0QjtZQXdDSSwwQkFBb0IsWUFBdUMsRUFBVSxNQUFpQixFQUFVLFdBQXFDLEVBQVUsU0FBUyxFQUFVLE1BQTJCLEVBQVUsWUFBdUM7Z0JBeENsUCxpQkFrRUM7Z0JBMUJ1QixpQkFBWSxHQUFaLFlBQVksQ0FBMkI7Z0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBVztnQkFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBMEI7Z0JBQVUsY0FBUyxHQUFULFNBQVMsQ0FBQTtnQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFxQjtnQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBMkI7Z0JBckN2TyxVQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUViLGFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBb0NqQixJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7Z0JBQ2xDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDeEIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUNoQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzdHLEtBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNsQixFQUFF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
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var GlobalController = (function () {
            function GlobalController(UserService, $mdSidenav, $state) {
                this.UserService = UserService;
                this.$mdSidenav = $mdSidenav;
                this.$state = $state;
                this.openLeftMenu = function () {
                    this.$mdSidenav('left').toggle();
                };
                this.status = UserService.status;
            }
            return GlobalController;
        }());
        Controllers.GlobalController = GlobalController;
        angular.module('app').controller('GlobalController', GlobalController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2xvYmFsQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdsb2JhbENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxHQUFHLENBZVo7QUFmRCxXQUFVLEdBQUc7SUFBQyxJQUFBLFdBQVcsQ0FleEI7SUFmYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3pCO1lBUUUsMEJBQW9CLFdBQXFDLEVBQVUsVUFBVSxFQUFVLE1BQTJCO2dCQUE5RixnQkFBVyxHQUFYLFdBQVcsQ0FBMEI7Z0JBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBQTtnQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFxQjtnQkFMM0csaUJBQVksR0FBRztvQkFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDckMsQ0FBQyxDQUFDO2dCQUlBLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNuQyxDQUFDO1lBQ0gsdUJBQUM7UUFBRCxDQUFDLEFBWEQsSUFXQztRQVhZLDRCQUFnQixtQkFXNUIsQ0FBQTtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDekUsQ0FBQyxFQWZhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQWV4QjtBQUFELENBQUMsRUFmUyxHQUFHLEtBQUgsR0FBRyxRQWVaIn0=
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HoldingController = (function () {
            // private accessCheck() {
            //     if (!this.UserService.getAccessCode()) {
            //         this.UserService.getLocation().then(() => {
            //             this.route();
            //         })
            //     } else {
            //         this.UserService.getLocation().then(() => {
            //             this.$location.path('/verified');
            //         })
            //     }
            // }
            function HoldingController(UserService, $location, $state, SweetAlert) {
                this.UserService = UserService;
                this.$location = $location;
                this.$state = $state;
                this.SweetAlert = SweetAlert;
                this.status = UserService.status;
                if ($location.search().code) {
                    UserService.setToken($location.search().code);
                    UserService.setUser();
                    // clear query string
                    $location.search('');
                    if ($location.hash())
                        $location.hash('');
                    this.alert();
                }
                else {
                    $state.go('Home');
                }
            }
            /**
             * [route description]
             * @return {[state]} [description]
             */
            HoldingController.prototype.route = function () {
                if (!this.status.branch) {
                    this.$state.go('Register');
                }
                if (this.status.branch && !this.status.verified) {
                    this.$state.go('Pending');
                }
                if (this.status.verified) {
                    this.$state.go('Welcome');
                }
            };
            HoldingController.prototype.alert = function () {
                var _this = this;
                this.SweetAlert.swal({
                    title: "This is a location based app!",
                    text: "If you have location services blocked for your browser, go to your settings and allow access.",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#B5191D",
                    confirmButtonText: "Allow Access",
                    cancelButtonText: "Don't Allow",
                    closeOnConfirm: true,
                    closeOnCancel: true
                }, function (isConfirm) {
                    if (isConfirm) {
                        _this.route();
                    }
                    else {
                        _this.UserService.logout();
                    }
                });
            };
            return HoldingController;
        }());
        Controllers.HoldingController = HoldingController;
        angular.module('app').controller('HoldingController', HoldingController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9sZGluZ0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIb2xkaW5nQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0F1RVo7QUF2RUQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBdUV4QjtJQXZFYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3ZCO1lBd0NJLDBCQUEwQjtZQUMxQiwrQ0FBK0M7WUFDL0Msc0RBQXNEO1lBQ3RELDRCQUE0QjtZQUM1QixhQUFhO1lBQ2IsZUFBZTtZQUNmLHNEQUFzRDtZQUN0RCxnREFBZ0Q7WUFDaEQsYUFBYTtZQUNiLFFBQVE7WUFDUixJQUFJO1lBQ0osMkJBQ1ksV0FBcUMsRUFDckMsU0FBOEIsRUFDOUIsTUFBMkIsRUFDM0IsVUFBVTtnQkFIVixnQkFBVyxHQUFYLFdBQVcsQ0FBMEI7Z0JBQ3JDLGNBQVMsR0FBVCxTQUFTLENBQXFCO2dCQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFxQjtnQkFDM0IsZUFBVSxHQUFWLFVBQVUsQ0FBQTtnQkFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO2dCQUNqQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDMUIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDdEIscUJBQXFCO29CQUNyQixTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNyQixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNqQixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7WUFDTCxDQUFDO1lBaEVEOzs7ZUFHRztZQUNLLGlDQUFLLEdBQWI7Z0JBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDN0IsQ0FBQztnQkFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM5QixDQUFDO1lBQ0wsQ0FBQztZQUVPLGlDQUFLLEdBQWI7Z0JBQUEsaUJBbUJDO2dCQWxCTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDakIsS0FBSyxFQUFFLCtCQUErQjtvQkFDdEMsSUFBSSxFQUFFLCtGQUErRjtvQkFDckcsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsZ0JBQWdCLEVBQUUsSUFBSTtvQkFDdEIsa0JBQWtCLEVBQUUsU0FBUztvQkFDN0IsaUJBQWlCLEVBQUUsY0FBYztvQkFDakMsZ0JBQWdCLEVBQUUsYUFBYTtvQkFDL0IsY0FBYyxFQUFFLElBQUk7b0JBQ3BCLGFBQWEsRUFBRSxJQUFJO2lCQUN0QixFQUNELFVBQUMsU0FBUztvQkFDTixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNaLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDakIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUM5QixDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQztZQThCTCx3QkFBQztRQUFELENBQUMsQUFwRUQsSUFvRUM7UUFwRVksNkJBQWlCLG9CQW9FN0IsQ0FBQTtRQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDN0UsQ0FBQyxFQXZFYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUF1RXhCO0FBQUQsQ0FBQyxFQXZFUyxHQUFHLEtBQUgsR0FBRyxRQXVFWiJ9
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(UserService, $state, $http, $location) {
                this.UserService = UserService;
                this.$state = $state;
                this.$http = $http;
                this.$location = $location;
                this.status = UserService.status;
                if (this.status._id) {
                    if (this.status.branch && this.status.verified)
                        this.$state.go('Welcome');
                    if (!this.status.branch)
                        this.$state.go('Register');
                    if (this.status.branch && !this.status.verified)
                        this.$state.go('Pending');
                }
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIb21lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FtQlo7QUFuQkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBbUJ4QjtJQW5CYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3ZCO1lBR0ksd0JBQ1ksV0FBcUMsRUFDckMsTUFBMkIsRUFDM0IsS0FBc0IsRUFDdEIsU0FBOEI7Z0JBSDlCLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7Z0JBQzNCLFVBQUssR0FBTCxLQUFLLENBQWlCO2dCQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFxQjtnQkFFdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO2dCQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO3dCQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMxRSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO3dCQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNuRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO3dCQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM5RSxDQUFDO1lBQ0wsQ0FBQztZQUNMLHFCQUFDO1FBQUQsQ0FBQyxBQWhCRCxJQWdCQztRQWhCWSwwQkFBYyxpQkFnQjFCLENBQUE7UUFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUN2RSxDQUFDLEVBbkJhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQW1CeEI7QUFBRCxDQUFDLEVBbkJTLEdBQUcsS0FBSCxHQUFHLFFBbUJaIn0=
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var MyEventController = (function () {
            function MyEventController(UserService, EventService, $state, ErrorService) {
                var _this = this;
                this.UserService = UserService;
                this.EventService = EventService;
                this.$state = $state;
                this.ErrorService = ErrorService;
                this.isLoading = true;
                UserService.userCheck();
                this.status = UserService.status;
                EventService.getMine(this.status._id).then(function (res) {
                    _this.events = res;
                    _this.isLoading = false;
                }, function (err) {
                    _this.ErrorService.toast(err.data.message, "warning");
                });
            }
            MyEventController.prototype.removeEvent = function (e) {
                var _this = this;
                this.EventService.remove(e._id).then(function (res) {
                    _this.events.splice(_this.events.indexOf(e), 1);
                    _this.ErrorService.toast("Event Deleted", "success");
                }, function (err) {
                    _this.ErrorService.toast(err.data.message, "warning");
                });
            };
            MyEventController.prototype.go = function (e) {
                this.$state.go('Event Details', { id: e._id });
            };
            return MyEventController;
        }());
        Controllers.MyEventController = MyEventController;
        angular.module('app').controller('MyEventController', MyEventController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlFdmVudENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNeUV2ZW50Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0ErQlo7QUEvQkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBK0J4QjtJQS9CYSxXQUFBLFdBQVcsRUFBQSxDQUFDO1FBQ3RCO1lBa0JJLDJCQUFvQixXQUFxQyxFQUFVLFlBQXVDLEVBQVUsTUFBMkIsRUFBVSxZQUF1QztnQkFsQnBNLGlCQTRCQztnQkFWdUIsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO2dCQUFVLGlCQUFZLEdBQVosWUFBWSxDQUEyQjtnQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFxQjtnQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBMkI7Z0JBZnpMLGNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBZ0JwQixXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDakMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzNDLEtBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNsQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDM0IsQ0FBQyxFQUFFLFVBQUMsR0FBRztvQkFDSCxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBdEJNLHVDQUFXLEdBQWxCLFVBQW1CLENBQWU7Z0JBQWxDLGlCQU9DO2dCQU5DLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO29CQUN2QyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDOUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDLEVBQUUsVUFBQyxHQUFHO29CQUNILEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsQ0FBQztZQUNILENBQUM7WUFFTSw4QkFBRSxHQUFULFVBQVUsQ0FBQztnQkFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7WUFDakQsQ0FBQztZQVlMLHdCQUFDO1FBQUQsQ0FBQyxBQTVCRCxJQTRCQztRQTVCWSw2QkFBaUIsb0JBNEI3QixDQUFBO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUM3RSxDQUFDLEVBL0JhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQStCeEI7QUFBRCxDQUFDLEVBL0JTLEdBQUcsS0FBSCxHQUFHLFFBK0JaIn0=
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var NavController = (function () {
            function NavController(UserService, $state, $mdSidenav) {
                this.UserService = UserService;
                this.$state = $state;
                this.$mdSidenav = $mdSidenav;
                this.openLeftMenu = function () {
                    this.$mdSidenav('left').toggle();
                };
                this.status = UserService.status;
            }
            NavController.prototype.logout = function () {
                this.UserService.logout();
            };
            return NavController;
        }());
        Controllers.NavController = NavController;
        angular.module('app').controller('NavController', NavController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5hdkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxHQUFHLENBd0JaO0FBeEJELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQXdCeEI7SUF4QmEsV0FBQSxXQUFXLEVBQUMsQ0FBQztRQUN6QjtZQWFFLHVCQUNZLFdBQXFDLEVBQ3JDLE1BQTJCLEVBQzNCLFVBQVU7Z0JBRlYsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO2dCQUNyQyxXQUFNLEdBQU4sTUFBTSxDQUFxQjtnQkFDM0IsZUFBVSxHQUFWLFVBQVUsQ0FBQTtnQkFUZixpQkFBWSxHQUFHO29CQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNyQyxDQUFDLENBQUM7Z0JBU0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ3JDLENBQUM7WUFoQk0sOEJBQU0sR0FBYjtnQkFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLENBQUM7WUFlSCxvQkFBQztRQUFELENBQUMsQUFwQkQsSUFvQkM7UUFwQlkseUJBQWEsZ0JBb0J6QixDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFBO0lBQ2xFLENBQUMsRUF4QmEsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBd0J4QjtBQUFELENBQUMsRUF4QlMsR0FBRyxLQUFILEdBQUcsUUF3QloifQ==
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var UserLoginController = (function () {
            // public login() {
            //     this.UserService.login(this.user).then(() => {
            //         this.$state.go('Home');
            //         this.user.email = '';
            //         this.user.password = '';
            //     });
            // }
            function UserLoginController(UserService, $state) {
                this.UserService = UserService;
                this.$state = $state;
                this.status = UserService.status;
                if (this.status._id) {
                    this.$state.go('Home');
                }
            }
            return UserLoginController;
        }());
        Controllers.UserLoginController = UserLoginController;
        angular.module('app').controller('UserLoginController', UserLoginController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckxvZ2luQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXJMb2dpbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxHQUFHLENBcUJaO0FBckJELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQXFCeEI7SUFyQmEsV0FBQSxXQUFXLEVBQUMsQ0FBQztRQUN2QjtZQUdJLG1CQUFtQjtZQUNuQixxREFBcUQ7WUFDckQsa0NBQWtDO1lBQ2xDLGdDQUFnQztZQUNoQyxtQ0FBbUM7WUFDbkMsVUFBVTtZQUNWLElBQUk7WUFFSiw2QkFBb0IsV0FBcUMsRUFBVSxNQUEyQjtnQkFBMUUsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO2dCQUFVLFdBQU0sR0FBTixNQUFNLENBQXFCO2dCQUMxRixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQ2pDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNCLENBQUM7WUFDTCxDQUFDO1lBQ0wsMEJBQUM7UUFBRCxDQUFDLEFBakJELElBaUJDO1FBakJZLCtCQUFtQixzQkFpQi9CLENBQUE7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pGLENBQUMsRUFyQmEsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBcUJ4QjtBQUFELENBQUMsRUFyQlMsR0FBRyxLQUFILEdBQUcsUUFxQloifQ==
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var UserRegistrationController = (function () {
            function UserRegistrationController(UserService, $state, $location) {
                this.UserService = UserService;
                this.$state = $state;
                this.$location = $location;
                this.branches = ['Army', 'Navy', 'Marines', 'Air Force'];
                // Poop
                this.email = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
                this.password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
                this.status = UserService.status;
            }
            UserRegistrationController.prototype.setMos = function () {
                if (this.user.branch == "Army") {
                    this.mos = "MOS";
                    this.max = 3;
                    this.pattern = /^[a-zA-Z0-9]+$/;
                    this.patternMessage = "Two numbers and one letter only. No AKIs or SQIs";
                    this.user.branchImg = "images/army.png";
                }
                if (this.user.branch == "Marines") {
                    this.mos = "MOS";
                    this.max = 4;
                    this.pattern = /^[0-9]+$/;
                    this.patternMessage = "Four numbers only. No other identifiers please.";
                    this.user.branchImg = "images/marines.png";
                }
                if (this.user.branch == "Air Force") {
                    this.mos = "AFSC";
                    this.max = 5;
                    this.pattern = /^[a-zA-Z0-9]+$/;
                    this.patternMessage = "Numbers and letters only";
                    this.user.branchImg = "images/airforce.png";
                }
                if (this.user.branch == "Navy") {
                    this.mos = "GENERAL & SERVICE RATING ABBREVIATION";
                    this.max = 3;
                    this.pattern = /^[a-zA-Z]+$/;
                    this.patternMessage = "Max of 3 letters please. No rank or other identifiers please.";
                    this.user.branchImg = "images/navy.png";
                }
            };
            UserRegistrationController.prototype.register = function (id, email, mos, branch) {
                var _this = this;
                this.user.email = this.user.email.toLowerCase().trim();
                this.user.mos = this.user.mos.toUpperCase();
                this.UserService.register(this.status._id, { email: this.user.email, branch: this.user.branch, mos: this.user.mos, branchImg: this.user.branchImg }).then(function () {
                    _this.$state.go('Verify');
                });
            };
            return UserRegistrationController;
        }());
        Controllers.UserRegistrationController = UserRegistrationController;
        angular.module('app').controller('UserRegistrationController', UserRegistrationController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclJlZ2lzdHJhdGlvbkNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVc2VyUmVnaXN0cmF0aW9uQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0E2RFo7QUE3REQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBNkR4QjtJQTdEYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3ZCO1lBc0RJLG9DQUFvQixXQUFxQyxFQUFVLE1BQTJCLEVBQVUsU0FBOEI7Z0JBQWxILGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFxQjtnQkFBVSxjQUFTLEdBQVQsU0FBUyxDQUFxQjtnQkE5Qy9ILGFBQVEsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUUzRCxPQUFPO2dCQUVBLFVBQUssR0FBRyxnUUFBZ1EsQ0FBQztnQkFDelEsYUFBUSxHQUFHLHVFQUF1RSxDQUFDO2dCQTJDdEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ3JDLENBQUM7WUExQ00sMkNBQU0sR0FBYjtnQkFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsQ0FBQSxDQUFDO29CQUMzQixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztvQkFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7b0JBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRSxnQkFBZ0IsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxrREFBa0QsQ0FBQTtvQkFDeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUE7Z0JBQzNDLENBQUM7Z0JBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksU0FB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
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var VerifiedController = (function () {
            // private updateUser() {
            //     this.$http.delete('/api/v1/access/' + this.access_code).then((res)=>{
            //         this.UserService.setToken(res.data['token']);
            //         this.UserService.setUser();
            //         this.$state.go('Welcome');
            //     }, (err)=>{
            //         this.ErrorService.sweetAlertRoute(err.data.message, "You may need to re-verify your service. Come back when you find my box of reticles.", "Verify");
            //     })
            // }
            //
            // private loginCheck() {
            //     if (this.UserService.getToken()) {
            //         this.updateUser()
            //     } else {
            //         this.UserService.setAccessCode(this.access_code);
            //         this.$state.go('Login')
            //     }
            // }
            function VerifiedController(ErrorService, $location, UserService, $http, $q, $state, $window) {
                this.ErrorService = ErrorService;
                this.$location = $location;
                this.UserService = UserService;
                this.$http = $http;
                this.$q = $q;
                this.$state = $state;
                this.$window = $window;
                // this.status = UserService.status;
                // if($location.search().access_code) {
                //     this.access_code = $location.search().access_code;
                //     if(UserService.getMobile()){
                //         UserService.removeMobile();
                //         $window.location.href = "veteranconnect://app/verify/" + this.access_code;
                //         return;
                //     }
                //     // $location.search('');
                //     // if ($location.hash()) $location.hash('');
                //     this.loginCheck();
                // } else if (UserService.getAccessCode())  {
                //     this.access_code = UserService.getAccessCode();
                //     this.updateUser();
                //     UserService.removeAccessCode();
                // }
            }
            return VerifiedController;
        }());
        Controllers.VerifiedController = VerifiedController;
        angular.module('app').controller('VerifiedController', VerifiedController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyaWZpZWRDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVmVyaWZpZWRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsR0FBRyxDQXNEWjtBQXRERCxXQUFVLEdBQUc7SUFBQyxJQUFBLFdBQVcsQ0FzRHhCO0lBdERhLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFFdkI7WUFNSSx5QkFBeUI7WUFDekIsNEVBQTRFO1lBQzVFLHdEQUF3RDtZQUN4RCxzQ0FBc0M7WUFDdEMscUNBQXFDO1lBQ3JDLGtCQUFrQjtZQUNsQixnS0FBZ0s7WUFDaEssU0FBUztZQUNULElBQUk7WUFDSixFQUFFO1lBQ0YseUJBQXlCO1lBQ3pCLHlDQUF5QztZQUN6Qyw0QkFBNEI7WUFDNUIsZUFBZTtZQUNmLDREQUE0RDtZQUM1RCxrQ0FBa0M7WUFDbEMsUUFBUTtZQUNSLElBQUk7WUFFSiw0QkFDWSxZQUF1QyxFQUN2QyxTQUE4QixFQUM5QixXQUFxQyxFQUNyQyxLQUFzQixFQUN0QixFQUFnQixFQUNoQixNQUEyQixFQUMzQixPQUEwQjtnQkFOMUIsaUJBQVksR0FBWixZQUFZLENBQTJCO2dCQUN2QyxjQUFTLEdBQVQsU0FBUyxDQUFxQjtnQkFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO2dCQUNyQyxVQUFLLEdBQUwsS0FBSyxDQUFpQjtnQkFDdEIsT0FBRSxHQUFGLEVBQUUsQ0FBYztnQkFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7Z0JBQzNCLFlBQU8sR0FBUCxPQUFPLENBQW1CO2dCQUM5QixvQ0FBb0M7Z0JBQ3BDLHVDQUF1QztnQkFDdkMseURBQXlEO2dCQUN6RCxtQ0FBbUM7Z0JBQ25DLHNDQUFzQztnQkFDdEMscUZBQXFGO2dCQUNyRixrQkFBa0I7Z0JBQ2xCLFFBQVE7Z0JBQ1IsK0JBQStCO2dCQUMvQixtREFBbUQ7Z0JBQ25ELHlCQUF5QjtnQkFDekIsNkNBQTZDO2dCQUM3QyxzREFBc0Q7Z0JBQ3RELHlCQUF5QjtnQkFDekIsc0NBQXNDO2dCQUN0QyxJQUFJO1lBQ1osQ0FBQztZQUNMLHlCQUFDO1FBQUQsQ0FBQyxBQWxERCxJQWtEQztRQWxEWSw4QkFBa0IscUJBa0Q5QixDQUFBO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUMvRSxDQUFDLEVBdERhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQXNEeEI7QUFBRCxDQUFDLEVBdERTLEdBQUcsS0FBSCxHQUFHLFFBc0RaIn0=
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var VerifyController = (function () {
            function VerifyController(UserService, moment, $state, ErrorService) {
                this.UserService = UserService;
                this.moment = moment;
                this.$state = $state;
                this.ErrorService = ErrorService;
            }
            VerifyController.prototype.verify = function () {
                var _this = this;
                this.date = this.moment(this.date).format("MM/DD/YYYY");
                this.dob = this.moment(this.dob).format("MM/DD/YYYY");
                this.date = this.date.toString();
                this.dob = this.dob.toString();
                var body = {
                    name: this.name,
                    date: this.date,
                    dob: this.dob
                };
                console.log(body);
                this.UserService.verifyUser(body).then(function (res) {
                    _this.ErrorService.toast("Service Verified", null);
                    _this.$state.go('Welcome');
                }, function (err) {
                    _this.ErrorService.sweetAlert("Error", err.data.message, "warning");
                    _this.$state.go("Pending");
                });
            };
            return VerifyController;
        }());
        Controllers.VerifyController = VerifyController;
        angular.module('app').controller("VerifyController", VerifyController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyaWZ5Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZlcmlmeUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxHQUFHLENBbUNaO0FBbkNELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQW1DeEI7SUFuQ2EsV0FBQSxXQUFXLEVBQUMsQ0FBQztRQUV2QjtZQUtJLDBCQUFvQixXQUFxQyxFQUFVLE1BQU0sRUFBVSxNQUEyQixFQUFVLFlBQXVDO2dCQUEzSSxnQkFBVyxHQUFYLFdBQVcsQ0FBMEI7Z0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBQTtnQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFxQjtnQkFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBMkI7WUFFL0osQ0FBQztZQUVNLGlDQUFNLEdBQWI7Z0JBQUEsaUJBcUJDO2dCQXBCRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBRXRELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMvQixJQUFJLElBQUksR0FBRztvQkFDUCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztpQkFDaEIsQ0FBQTtnQkFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVsQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO29CQUN2QyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDbEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzlCLENBQUMsRUFBRSxVQUFDLEdBQUc7b0JBQ0gsS0FBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNuRSxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDO1lBQ0wsdUJBQUM7UUFBRCxDQUFDLEFBL0JELElBK0JDO1FBL0JZLDRCQUFnQixtQkErQjVCLENBQUE7UUFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzNFLENBQUMsRUFuQ2EsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBbUN4QjtBQUFELENBQUMsRUFuQ1MsR0FBRyxLQUFILEdBQUcsUUFtQ1oifQ==
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var WelcomeController = (function () {
            function WelcomeController(UserService) {
                this.UserService = UserService;
                UserService.userCheck();
            }
            return WelcomeController;
        }());
        Controllers.WelcomeController = WelcomeController;
        angular.module('app').controller("WelcomeController", WelcomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2VsY29tZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXZWxjb21lQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FRWjtBQVJELFdBQVUsR0FBRztJQUFDLElBQUEsV0FBVyxDQVF4QjtJQVJhLFdBQUEsV0FBVyxFQUFDLENBQUM7UUFDdkI7WUFFSSwyQkFBcUIsV0FBcUM7Z0JBQXJDLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDdEQsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzVCLENBQUM7WUFDTCx3QkFBQztRQUFELENBQUMsQUFMRCxJQUtDO1FBTFksNkJBQWlCLG9CQUs3QixDQUFBO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUM3RSxDQUFDLEVBUmEsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBUXhCO0FBQUQsQ0FBQyxFQVJTLEdBQUcsS0FBSCxHQUFHLFFBUVoifQ==
var app;
(function (app) {
    var Filters;
    (function (Filters) {
        angular.module('app').filter('url', function () {
            return function (str, length) {
                return str.substr(0, length - 6) + 'ls.jpg';
            };
        });
    })(Filters = app.Filters || (app.Filters = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNfdXJsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJ1bmNfdXJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsR0FBRyxDQU1aO0FBTkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxPQUFPLENBTXBCO0lBTmEsV0FBQSxPQUFPLEVBQUMsQ0FBQztRQUNyQixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDbEMsTUFBTSxDQUFDLFVBQVMsR0FBVyxFQUFFLE1BQWM7Z0JBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO1lBQzdDLENBQUMsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQU5hLE9BQU8sR0FBUCxXQUFPLEtBQVAsV0FBTyxRQU1wQjtBQUFELENBQUMsRUFOUyxHQUFHLEtBQUgsR0FBRyxRQU1aIn0=
var app;
(function (app) {
    var Filters;
    (function (Filters) {
        angular.module('app').filter('truncate', function () {
            return function (str, length) {
                if (str.length <= length)
                    return str;
                else
                    return str.substr(0, length - 3) + '...';
            };
        });
    })(Filters = app.Filters || (app.Filters = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1bmNhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cnVuY2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FPWjtBQVBELFdBQVUsR0FBRztJQUFDLElBQUEsT0FBTyxDQU9wQjtJQVBhLFdBQUEsT0FBTyxFQUFDLENBQUM7UUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQ3ZDLE1BQU0sQ0FBQyxVQUFTLEdBQVcsRUFBRSxNQUFjO2dCQUN6QyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQztvQkFBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNyQyxJQUFJO29CQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ2hELENBQUMsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQVBhLE9BQU8sR0FBUCxXQUFPLEtBQVAsV0FBTyxRQU9wQjtBQUFELENBQUMsRUFQUyxHQUFHLEtBQUgsR0FBRyxRQU9aIn0=
var app;
(function (app) {
    var Services;
    (function (Services) {
        function AuthInterceptor($window) {
            return {
                request: function (config) {
                    config.headers = config.headers || {};
                    if ($window.localStorage.getItem('token')) {
                        // Bearer token
                        config.headers['Authorization'] = 'Bearer ' + $window.localStorage.getItem('token');
                    }
                    return config;
                }
            };
        }
        Services.AuthInterceptor = AuthInterceptor;
        angular.module('app').service('AuthInterceptor', AuthInterceptor);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXV0aEludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsR0FBRyxDQWNaO0FBZEQsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBY3JCO0lBZGEsV0FBQSxRQUFRLEVBQUMsQ0FBQztRQUN0Qix5QkFBZ0MsT0FBMEI7WUFDeEQsTUFBTSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxVQUFTLE1BQU07b0JBQ3RCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7b0JBQ3RDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDMUMsZUFBZTt3QkFDZixNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDdEYsQ0FBQztvQkFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNoQixDQUFDO2FBQ0YsQ0FBQTtRQUNILENBQUM7UUFYZSx3QkFBZSxrQkFXOUIsQ0FBQTtRQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3BFLENBQUMsRUFkYSxRQUFRLEdBQVIsWUFBUSxLQUFSLFlBQVEsUUFjckI7QUFBRCxDQUFDLEVBZFMsR0FBRyxLQUFILEdBQUcsUUFjWiJ9
var app;
(function (app) {
    var Services;
    (function (Services) {
        var CommentService = (function () {
            // public update(c: app.i.IComment) {
            //   let q = this.$q.defer();
            //   this.$http.put('/api/v1/comments/' + c._id, c.message).then((res) => {
            //     q.resolve();
            //   });
            //   return q.promise;
            // }
            function CommentService($resource, $http, $q) {
                this.$resource = $resource;
                this.$http = $http;
                this.$q = $q;
                this.CommentResource = $resource('/api/v1/comments/:id', null, {
                    'update': { method: 'PUT' }
                });
            }
            CommentService.prototype.create = function (comment) {
                return this.CommentResource.save(comment).$promise;
            };
            CommentService.prototype.remove = function (id) {
                return this.CommentResource.remove({ id: id }).$promise;
            };
            ;
            CommentService.prototype.update = function (comment) {
                return this.CommentResource.update({ id: comment._id }, { message: comment.message }).$promise;
            };
            return CommentService;
        }());
        Services.CommentService = CommentService;
        angular.module('app').service('CommentService', CommentService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb21tZW50U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FzQ1o7QUF0Q0QsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBc0NyQjtJQXRDYSxXQUFBLFFBQVEsRUFBQyxDQUFDO1FBTXRCO1lBZUUscUNBQXFDO1lBQ3JDLDZCQUE2QjtZQUM3QiwyRUFBMkU7WUFDM0UsbUJBQW1CO1lBQ25CLFFBQVE7WUFDUixzQkFBc0I7WUFDdEIsSUFBSTtZQUdKLHdCQUFvQixTQUF1QyxFQUFVLEtBQXNCLEVBQVUsRUFBZ0I7Z0JBQWpHLGNBQVMsR0FBVCxTQUFTLENBQThCO2dCQUFVLFVBQUssR0FBTCxLQUFLLENBQWlCO2dCQUFVLE9BQUUsR0FBRixFQUFFLENBQWM7Z0JBQ25ILElBQUksQ0FBQyxlQUFlLEdBQXFCLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLEVBQUU7b0JBQzdFLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7aUJBQzVCLENBQUMsQ0FBQztZQUNMLENBQUM7WUF6Qk0sK0JBQU0sR0FBYixVQUFjLE9BQXVCO2dCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3JELENBQUM7WUFFTSwrQkFBTSxHQUFiLFVBQWMsRUFBVTtnQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzFELENBQUM7O1lBRU0sK0JBQU0sR0FBYixVQUFjLE9BQXVCO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNqRyxDQUFDO1lBZ0JILHFCQUFDO1FBQUQsQ0FBQyxBQTdCRCxJQTZCQztRQTdCWSx1QkFBYyxpQkE2QjFCLENBQUE7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNsRSxDQUFDLEVBdENhLFFBQVEsR0FBUixZQUFRLEtBQVIsWUFBUSxRQXNDckI7QUFBRCxDQUFDLEVBdENTLEdBQUcsS0FBSCxHQUFHLFFBc0NaIn0=
var app;
(function (app) {
    var Services;
    (function (Services) {
        var ErrorService = (function () {
            function ErrorService(SweetAlert, $mdToast, $state) {
                this.SweetAlert = SweetAlert;
                this.$mdToast = $mdToast;
                this.$state = $state;
            }
            ErrorService.prototype.toast = function (message, theme) {
                this.$mdToast.show(this.$mdToast.simple()
                    .textContent(message)
                    .position('bottom right')
                    .hideDelay(3000)
                    .theme(theme));
            };
            ErrorService.prototype.sweetAlert = function (title, message, type) {
                this.SweetAlert.swal(title, message, type);
            };
            ErrorService.prototype.sweetAlertReload = function (title, message) {
                var _this = this;
                this.SweetAlert.swal({
                    title: title,
                    text: message,
                    type: null,
                    allowOutsideClick: true,
                    showCancelButton: false,
                    confirmButtonColor: "#B5191D",
                    confirmButtonText: "Ok!",
                    closeOnConfirm: true
                }, function () {
                    _this.$state.reload();
                });
            };
            ErrorService.prototype.sweetAlertRoute = function (title, message, state) {
                var _this = this;
                this.SweetAlert.swal({
                    title: title,
                    text: message,
                    type: null,
                    allowOutsideClick: true,
                    showCancelButton: false,
                    confirmButtonColor: "#B5191D",
                    confirmButtonText: "Ok!",
                    closeOnConfirm: true
                }, function () {
                    _this.$state.go(state);
                });
            };
            ErrorService.prototype.sweetAlertEvents = function (title, message, state) {
                var _this = this;
                this.SweetAlert.swal({
                    title: title,
                    text: message,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#B5191D",
                    confirmButtonText: "Create Event!",
                    cancelButtonText: "Adjust Radius",
                    closeOnConfirm: true,
                    closeOnCancel: true
                }, function (isConfirm) {
                    if (isConfirm) {
                        _this.$state.go(state);
                    }
                    else {
                        return;
                    }
                });
            };
            return ErrorService;
        }());
        Services.ErrorService = ErrorService;
        angular.module('app').service('ErrorService', ErrorService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRXJyb3JTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsR0FBRyxDQXdFWjtBQXhFRCxXQUFVLEdBQUc7SUFBQyxJQUFBLFFBQVEsQ0F3RXJCO0lBeEVhLFdBQUEsUUFBUSxFQUFDLENBQUM7UUFDdEI7WUFvRUUsc0JBQW9CLFVBQVUsRUFBVSxRQUFRLEVBQVUsTUFBMkI7Z0JBQWpFLGVBQVUsR0FBVixVQUFVLENBQUE7Z0JBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBQTtnQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFxQjtZQUFJLENBQUM7WUFsRW5GLDRCQUFLLEdBQVosVUFBYSxPQUFPLEVBQUUsS0FBSztnQkFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7cUJBQ3JCLFdBQVcsQ0FBQyxPQUFPLENBQUM7cUJBQ3BCLFFBQVEsQ0FBQyxjQUFjLENBQUM7cUJBQ3hCLFNBQVMsQ0FBQyxJQUFJLENBQUM7cUJBQ2YsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUNoQixDQUFDO1lBQ04sQ0FBQztZQUVNLGlDQUFVLEdBQWpCLFVBQW1CLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSTtnQkFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM3QyxDQUFDO1lBRU0sdUNBQWdCLEdBQXZCLFVBQTBCLEtBQUssRUFBRSxPQUFPO2dCQUF4QyxpQkFjQztnQkFiRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDakIsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLE9BQU87b0JBQ2IsSUFBSSxFQUFFLElBQUk7b0JBQ1YsaUJBQWlCLEVBQUUsSUFBSTtvQkFDdkIsZ0JBQWdCLEVBQUUsS0FBSztvQkFDdkIsa0JBQWtCLEVBQUUsU0FBUztvQkFDN0IsaUJBQWlCLEVBQUUsS0FBSztvQkFDeEIsY0FBYyxFQUFFLElBQUk7aUJBQ3ZCLEVBQ0Q7b0JBQ0ksS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBRU0sc0NBQWUsR0FBdEIsVUFBeUIsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLO2dCQUE5QyxpQkFjQztnQkFiRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDakIsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLE9BQU87b0JBQ2IsSUFBSSxFQUFFLElBQUk7b0JBQ1YsaUJBQWlCLEVBQUUsSUFBSTtvQkFDdkIsZ0JBQWdCLEVBQUUsS0FBSztvQkFDdkIsa0JBQWtCLEVBQUUsU0FBUztvQkFDN0IsaUJBQWlCLEVBQUUsS0FBSztvQkFDeEIsY0FBYyxFQUFFLElBQUk7aUJBQ3ZCLEVBQ0Q7b0JBQ0ksS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUVNLHVDQUFnQixHQUF2QixVQUF5QixLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUs7Z0JBQTlDLGlCQW1CQztnQkFsQkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSxLQUFLO29CQUNaLElBQUksRUFBRSxPQUFPO29CQUNiLElBQUksRUFBRSxTQUFTO29CQUNmLGdCQUFnQixFQUFFLElBQUk7b0JBQ3RCLGtCQUFrQixFQUFFLFNBQVM7b0JBQzdCLGlCQUFpQixFQUFFLGVBQWU7b0JBQ2xDLGdCQUFnQixFQUFFLGVBQWU7b0JBQ2pDLGNBQWMsRUFBRSxJQUFJO29CQUNwQixhQUFhLEVBQUUsSUFBSTtpQkFDdEIsRUFDRCxVQUFDLFNBQVM7b0JBQ04sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDWixLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDMUIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixNQUFNLENBQUE7b0JBQ1YsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7WUFFSCxtQkFBQztRQUFELENBQUMsQUFyRUQsSUFxRUM7UUFyRVkscUJBQVksZUFxRXhCLENBQUE7UUFDRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUQsQ0FBQyxFQXhFYSxRQUFRLEdBQVIsWUFBUSxLQUFSLFlBQVEsUUF3RXJCO0FBQUQsQ0FBQyxFQXhFUyxHQUFHLEtBQUgsR0FBRyxRQXdFWiJ9
var app;
(function (app) {
    var Services;
    (function (Services) {
        var EventService = (function () {
            function EventService($resource, $http, $q, UserService) {
                this.$resource = $resource;
                this.$http = $http;
                this.$q = $q;
                this.UserService = UserService;
                this.EventResource = $resource('/api/v1/events/:id', null, {
                    'update': { method: 'PUT' }
                });
                this.status = UserService.status;
            }
            EventService.prototype.getAll = function (_a) {
                var lng = _a.lng, lat = _a.lat, maxDist = _a.maxDist;
                return this.EventResource.query({ lng: lng, lat: lat, maxDist: maxDist }).$promise;
            };
            EventService.prototype.getOne = function (id) {
                return this.EventResource.get({ id: id }).$promise;
            };
            EventService.prototype.getMine = function (id) {
                return this.EventResource.query({ id: 'myevents' }).$promise;
            };
            EventService.prototype.getAttending = function (id) {
                return this.EventResource.query({ id: 'attending' }).$promise;
            };
            EventService.prototype.createEvent = function (event) {
                return this.EventResource.save(event).$promise;
            };
            EventService.prototype.update = function (event) {
                return this.EventResource.update({ id: event._id }, { title: event.title, description: event.description, numGuests: event.numGuests, loc: event.loc, eventAddress: event.eventAddress, dateTime: event.dateTime, name: event.name, city: event.city, state: event.state }).$promise;
            };
            EventService.prototype.attending = function (id) {
                var q = this.$q.defer();
                this.$http.put('/api/v1/events/attending/' + id, null).then(function () {
                    q.resolve();
                }, function (err) {
                    q.reject(err);
                });
                return q.promise;
            };
            EventService.prototype.notAttending = function (id) {
                var q = this.$q.defer();
                this.$http.put('/api/v1/events/notattending/' + id, null).then(function () {
                    q.resolve();
                });
                return q.promise;
            };
            EventService.prototype.remove = function (id) {
                return this.EventResource.remove({ id: id }).$promise;
            };
            return EventService;
        }());
        Services.EventService = EventService;
        angular.module('app').service('EventService', EventService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRXZlbnRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsR0FBRyxDQXVFWjtBQXZFRCxXQUFVLEdBQUc7SUFBQyxJQUFBLFFBQVEsQ0F1RXJCO0lBdkVhLFdBQUEsUUFBUSxFQUFDLENBQUM7UUFPcEI7WUFtREksc0JBQW9CLFNBQXVDLEVBQy9DLEtBQXNCLEVBQ3RCLEVBQWdCLEVBQ2hCLFdBQXFDO2dCQUg3QixjQUFTLEdBQVQsU0FBUyxDQUE4QjtnQkFDL0MsVUFBSyxHQUFMLEtBQUssQ0FBaUI7Z0JBQ3RCLE9BQUUsR0FBRixFQUFFLENBQWM7Z0JBQ2hCLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFHN0MsSUFBSSxDQUFDLGFBQWEsR0FBbUIsU0FBUyxDQUFDLG9CQUFvQixFQUFFLElBQUksRUFBRTtvQkFDdkUsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztpQkFDNUIsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNyQyxDQUFDO1lBekRNLDZCQUFNLEdBQWIsVUFBYyxFQUFtQjtvQkFBbEIsWUFBRyxFQUFFLFlBQUcsRUFBRSxvQkFBTztnQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNyRixDQUFDO1lBRU0sNkJBQU0sR0FBYixVQUFjLEVBQVU7Z0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNyRCxDQUFDO1lBRU0sOEJBQU8sR0FBZCxVQUFlLEVBQVU7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
var app;
(function (app) {
    var Services;
    (function (Services) {
        var UserService = (function () {
            function UserService($http, $q, $window, $timeout, $state, ErrorService) {
                this.$http = $http;
                this.$q = $q;
                this.$window = $window;
                this.$timeout = $timeout;
                this.$state = $state;
                this.ErrorService = ErrorService;
                this.status = { _id: null, name: null, imgUrl: null, maxDist: null, loc: null, verified: null, branch: null, locStamp: null };
                if (this.getToken()) {
                    if (this.getToken() == null) {
                        this.logout();
                    }
                    else {
                        this.setUser();
                        this.checkLocation();
                    }
                }
            }
            UserService.prototype.login = function (user) {
                var _this = this;
                var q = this.$q.defer();
                this.$http.post('/api/v1/users/login', user).then(function (res) {
                    _this.setToken(res.data['token']);
                    _this.setUser();
                    q.resolve();
                });
                return q.promise;
            };
            UserService.prototype.verifyUser = function (body) {
                var _this = this;
                var q = this.$q.defer();
                this.$http.post('/api/v1/access', body).then(function (res) {
                    _this.setToken(res.data['token']);
                    _this.setUser();
                    q.resolve();
                }, function (err) {
                    q.reject(err);
                });
                return q.promise;
            };
            UserService.prototype.register = function (id, _a) {
                var _this = this;
                var email = _a.email, branch = _a.branch, mos = _a.mos, branchImg = _a.branchImg;
                var q = this.$q.defer();
                this.$http.put('/api/v1/users/register/' + id, { email: email, branch: branch, mos: mos, branchImg: branchImg }).then(function (res) {
                    _this.setToken(res.data['token']);
                    _this.setUser();
                    q.resolve();
                });
                return q.promise;
            };
            UserService.prototype.getToken = function () {
                return this.$window.localStorage.getItem('token');
            };
            UserService.prototype.setToken = function (token) {
                this.$window.localStorage.setItem('token', token);
            };
            UserService.prototype.logout = function () {
                this.$window.localStorage.removeItem('token');
                this.clearUser();
                this.$state.go('Login');
            };
            // public getMobile() {
            //     return this.$window.localStorage.getItem('mobile');
            // }
            //
            // public setMobile(mobile: string) {
            //     this.$window.localStorage.setItem('mobile', mobile);
            // }
            //
            // public removeMobile() {
            //     this.$window.localStorage.removeItem('mobile');
            // }
            //
            // public getAccessCode() {
            //     return this.$window.localStorage.getItem('access_code');
            // }
            //
            // public setAccessCode(access_code: string) {
            //     this.$window.localStorage.setItem('access_code', access_code);
            // }
            //
            // public removeAccessCode() {
            //     this.$window.localStorage.removeItem('access_code');
            // }
            UserService.prototype.setUser = function () {
                var token = this.getToken();
                var u = JSON.parse(this.urlBase64Decode(this.getToken().split('.')[1]));
                this.status._id = u._id;
                this.status.name = u.firstName + " " + u.lastName;
                this.status.imgUrl = u.imgUrl;
                this.status.branch = u.branch;
                this.status.verified = u.verified;
                if (u.loc) {
                    this.status.loc = u.loc;
                    this.status.locStamp = u.locStamp;
                }
            };
            UserService.prototype.updateLoc = function (id, _a) {
                var _this = this;
                var loc = _a.loc, stamp = _a.stamp;
                var q = this.$q.defer();
                this.$http.put('/api/v1/users/location/' + id, { loc: loc, locStamp: stamp }).then(function (res) {
                    _this.setToken(res.data['token']);
                    _this.setUser();
                    q.resolve();
                });
                return q.promise;
            };
            UserService.prototype.checkLocation = function () {
                var date = Date.now();
                if (this.status.locStamp && this.status.locStamp < date && this.status.locStamp != undefined) {
                    this.getLocation();
                }
                else if (this.status.locStamp == undefined) {
                    this.status.locStamp = date;
                }
            };
            UserService.prototype.getLocation = function () {
                var _this = this;
                var q = this.$q.defer();
                var success = function (position) {
                    var lat = position.coords.latitude;
                    var lng = position.coords.longitude;
                    var loc = [lng, lat];
                    var stamp = position.timestamp;
                    stamp += (10 * 60 * 1000);
                    _this.status.loc = loc;
                    _this.updateLoc(_this.status._id, { loc: loc, stamp: stamp });
                    q.resolve();
                };
                var error = function () {
                    _this.ErrorService.sweetAlert("Location Unavailable", "We were unable to find your location. If you're on a phone and have reception, make sure you have location permissions turned on in your phone or browswer settings. Try closing the tab and re-opening.", "warning");
                };
                var options = {
                    timeout: 10000
                };
                navigator.geolocation.getCurrentPosition(success, error, options);
                return q.promise;
            };
            UserService.prototype.clearUser = function () {
                this.status._id = null;
                this.status.name = null;
                this.status.maxDist = null;
                this.status.imgUrl = null;
                this.status.branch = null;
                this.status.loc = null;
                this.status.verified = null;
                this.status.locStamp = null;
            };
            UserService.prototype.urlBase64Decode = function (str) {
                var output = str.replace(/-/g, '+').replace(/_/g, '/');
                switch (output.length % 4) {
                    case 0: {
                        break;
                    }
                    case 2: {
                        output += '==';
                        break;
                    }
                    case 3: {
                        output += '=';
                        break;
                    }
                    default: {
                        throw 'Illegal base64url string!';
                    }
                }
                return decodeURIComponent(encodeURIComponent(this.$window.atob(output))); //polifyll https://github.com/davidchambers/Base64.js
            };
            UserService.prototype.userCheck = function () {
                if (!this.getToken())
                    this.$state.go('Login');
                if (this.getToken() && !this.status.branch)
                    this.$state.go('Register');
                if (this.getToken() && !this.status.verified)
                    this.$state.go('Pending');
            };
            return UserService;
        }());
        Services.UserService = UserService;
        angular.module('app').service('UserService', UserService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVc2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0F5TFo7QUF6TEQsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBeUxyQjtJQXpMYSxXQUFBLFFBQVEsRUFBQyxDQUFDO1FBQ3BCO1lBcUtJLHFCQUNZLEtBQXNCLEVBQ3RCLEVBQWdCLEVBQ2hCLE9BQTBCLEVBQzFCLFFBQTRCLEVBQzVCLE1BQTJCLEVBQzNCLFlBQXVDO2dCQUx2QyxVQUFLLEdBQUwsS0FBSyxDQUFpQjtnQkFDdEIsT0FBRSxHQUFGLEVBQUUsQ0FBYztnQkFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7Z0JBQzFCLGFBQVEsR0FBUixRQUFRLENBQW9CO2dCQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFxQjtnQkFDM0IsaUJBQVksR0FBWixZQUFZLENBQTJCO2dCQTFLNUMsV0FBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBNEs1SCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNsQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDZixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3pCLENBQUM7Z0JBQ0ws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
var app;
(function (app) {
    var Services;
    (function (Services) {
        var YelpService = (function () {
            function YelpService($http, $q) {
                this.$http = $http;
                this.$q = $q;
            }
            YelpService.prototype.yelpSearch = function (_a) {
                var term = _a.term, location = _a.location;
                var q = this.$q.defer();
                // this.$http.get('/api/v1/yelp/search', {term: term, location: location}).then((data)=>{
                //     q.resolve(data);
                // });
                return q.promise;
            };
            ;
            return YelpService;
        }());
        Services.YelpService = YelpService;
        angular.module('app').service('YelpService', YelpService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWWVscFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJZZWxwU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FhWjtBQWJELFdBQVUsR0FBRztJQUFDLElBQUEsUUFBUSxDQWFyQjtJQWJhLFdBQUEsUUFBUSxFQUFDLENBQUM7UUFDcEI7WUFTSSxxQkFBb0IsS0FBc0IsRUFBVSxFQUFnQjtnQkFBaEQsVUFBSyxHQUFMLEtBQUssQ0FBaUI7Z0JBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYztZQUFFLENBQUM7WUFQcEUsZ0NBQVUsR0FBakIsVUFBa0IsRUFBZ0I7b0JBQWYsY0FBSSxFQUFFLHNCQUFRO2dCQUM3QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN4Qix5RkFBeUY7Z0JBQ3pGLHVCQUF1QjtnQkFDdkIsTUFBTTtnQkFDTixNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUNyQixDQUFDOztZQUVELGtCQUFDO1FBQUQsQ0FBQyxBQVZELElBVUM7UUFWWSxvQkFBVyxjQVV2QixDQUFBO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzlELENBQUMsRUFiYSxRQUFRLEdBQVIsWUFBUSxLQUFSLFlBQVEsUUFhckI7QUFBRCxDQUFDLEVBYlMsR0FBRyxLQUFILEdBQUcsUUFhWiJ9