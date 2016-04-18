namespace app.Controllers {
    export class HomeController {
        public status;

        constructor(
            private UserService: app.Services.UserService,
            private $state: ng.ui.IStateService,
            private $http: ng.IHttpService,
            private $location: ng.ILocationService,
            private $timeout: ng.ITimeoutService
        ) {
            if($location.search().code) {
              UserService.setToken($location.search().code);
              UserService.setUser();
              // clear query string
              $location.search('');
              if ($location.hash()) $location.hash('');
            }
            this.status = UserService.status;
            $timeout(()=>{
                if((this.status._id) && (!this.status.branch)) {
                    this.$state.go('Register');
                }
            }, 10)
        }
    }
    angular.module('app').controller('HomeController', HomeController);
}
