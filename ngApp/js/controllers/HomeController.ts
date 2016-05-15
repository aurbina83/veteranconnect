namespace app.Controllers {
    export class HomeController {
        public status;

        private route (){
            if((this.status._id) && (!this.status.branch)) {
                this.$state.go('Register');
            }
            if((this.status._id) && (this.status.branch)) {
                this.$state.go('Events');
            }
        }

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
                  this.route();
              });
              // clear query string
              $location.search('');
              if ($location.hash()) $location.hash('');
            }
            this.route();
        }
    }
    angular.module('app').controller('HomeController', HomeController);
}
