namespace app.Controllers {
    export class HomeController {
        public status;

        constructor(
            private UserService: app.Services.UserService,
            private $state: ng.ui.IStateService,
            private $http: ng.IHttpService,
            private $location: ng.ILocationService,
            private ErrorService: app.Services.ErrorService
        ) {
            ErrorService.error("Test");
            this.status = UserService.status;
            if (this.status._id) {
                if (this.status.branch && this.status.verified) this.$state.go('Welcome');
                if(!this.status.branch) this.$state.go('Register');
                if(this.status.branch && !this.status.verified) this.$state.go('Pending');
            }
        }
    }
    angular.module('app').controller('HomeController', HomeController);
}
