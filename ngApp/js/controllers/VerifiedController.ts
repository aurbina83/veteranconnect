namespace app.Controllers {
    export class VerifiedController {
        public status;
        public message;
        public access_code;

        private updateUser() {
            this.$http.delete('/api/v1/access/' + this.access_code).then((res)=>{
                this.UserService.setToken(res.data['token']);
                this.UserService.setUser();
                this.$state.go('Welcome');
            }, (err)=>{
                this.message = err.data.message;
            })
        }

        constructor(
            private $location: ng.ILocationService,
            private UserService: app.Services.UserService,
            private $http: ng.IHttpService,
            private $q: ng.IQService,
            private $state: ng.ui.IStateService){
                this.status = UserService.status;
                if($location.search().access_code) {
                    this.access_code = $location.search().access_code;
                    $location.search('');
                    if ($location.hash()) $location.hash('/verify');
                    this.updateUser()
                }
        }
    }

    angular.module('app').controller('VerifiedController', VerifiedController);
}
