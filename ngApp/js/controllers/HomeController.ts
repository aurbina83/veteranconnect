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
            if (this.status.branch) this.$state.go('Welcome');
        }
    }
    angular.module('app').controller('HomeController', HomeController);
}
