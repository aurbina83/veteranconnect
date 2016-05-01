namespace app.Controllers {
    export class HomeController {
        public status;

        constructor(
            private UserService: app.Services.UserService,
            private $state: ng.ui.IStateService,
            private $http: ng.IHttpService,
            private $location: ng.ILocationService
        ) {
            if($location.search().code) {
              UserService.setToken($location.search().code);
              UserService.setUser();
              // clear query string
              $location.search('');
              if ($location.hash()) $location.hash('');
            }
            if(this.status){
                UserService.setUser().then(()=> {
                    this.status = UserService.status;
                    if((this.status._id) && (!this.status.branch)) {
                        this.$state.go('Register');
                    }
                });
            }
        }
    }
    angular.module('app').controller('HomeController', HomeController);
}
