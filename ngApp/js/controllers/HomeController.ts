namespace app.Controllers {
    export class HomeController {
        public status;

        constructor(
            private UserService: app.Services.UserService,
            private $state: ng.ui.IStateService,
            private $http: ng.IHttpService,
            private $location: ng.ILocationService
        ) {
            this.status = UserService.status;
            if($location.search().code) {
              UserService.setToken($location.search().code);
              UserService.setUser().then(()=>{
                  this.status = UserService.status;
                  UserService.loginRoute();
              });
              // clear query string
              $location.search('');
              if ($location.hash()) $location.hash('');
            }
            UserService.loginRoute();
        }
    }
    angular.module('app').controller('HomeController', HomeController);
}
