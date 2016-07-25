namespace app.Controllers {
    export class VerifiedController {
        public status;
        public message;
        public access_code;

        private updateUser() {
            console.log('logged');
            this.$http.delete('/api/v1/access/' + this.access_code).then((res)=>{
                console.log('here too');
                this.UserService.setToken(res.data['token']);
                this.UserService.setUser();
                this.$state.go('Welcome');
            }, (err)=>{
                this.message = err.data.message;
            })
        }

        private loginCheck() {
            if (this.UserService.getToken()) {
                this.updateUser()
            } else {
                this.UserService.setAccessCode(this.access_code);
                this.$state.go('Login')
            }
        }

        constructor(
            private $location: ng.ILocationService,
            private UserService: app.Services.UserService,
            private $http: ng.IHttpService,
            private $q: ng.IQService,
            private $state: ng.ui.IStateService){
                this.status = UserService.status;
                if($location.search().access_code) {
                    console.log('here');
                    this.access_code = $location.search().access_code;
                    $location.search('');
                    if ($location.hash()) $location.hash('');
                    this.loginCheck();
                }
                if (UserService.getAccessCode())  {
                    this.access_code = UserService.getAccessCode();
                    this.updateUser();
                    UserService.removeAccessCode();
                }
        }
    }
    angular.module('app').controller('VerifiedController', VerifiedController);
}
