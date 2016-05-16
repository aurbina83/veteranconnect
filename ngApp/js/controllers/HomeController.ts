namespace app.Controllers {
    export class HomeController {
        public status;
        public user;

        private route (){
            if(!this.user.branch) {
                this.$state.go('Register');
            }
            if(this.user.branch) {
                this.$state.go('Welcome');
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
              UserService.setUser();
              // clear query string
              $location.search('');
              if ($location.hash()) $location.hash('');
            }

            if(this.status._id){
                    UserService.getUser(this.status._id).then((res)=>{
                        this.user = res;
                        this.route();
                    })
                }
        }
    }
    angular.module('app').controller('HomeController', HomeController);
}
