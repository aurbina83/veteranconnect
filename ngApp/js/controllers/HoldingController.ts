namespace app.Controllers {
    export class HoldingController {
        public status;

        /**
         * [route description]
         * @return {[state]} [description]
         */
        private route() {
            if (!this.status.branch) {
                this.$state.go('Register');
            }
            if (this.status.branch && !this.status.verified) {
                this.$state.go('Pending')
            }
            if (this.status.verified) {
                this.$state.go('Welcome');
            }
        }

        private alert() {
            if(this.status.branch && this.status.verified) {
                this.accessCheck();
            } else {
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
                },
                (isConfirm) =>{
                    if (isConfirm) {
                        this.accessCheck();
                    } else {
                        this.UserService.logout();
                    }
                });
            }
        }


        private accessCheck() {
            if (!this.UserService.getAccessCode()) {
                this.UserService.getLocation().then(() => {
                    this.route();
                })
            } else {
                this.UserService.getLocation().then(() => {
                    this.$location.path('/verified');
                })
            }
        }
        constructor(
            private UserService: app.Services.UserService,
            private $location: ng.ILocationService,
            private $state: ng.ui.IStateService,
            private SweetAlert) {
            this.status = UserService.status;
            if ($location.search().code) {
                UserService.setToken($location.search().code);
                UserService.setUser();
                // clear query string
                $location.search('');
                if ($location.hash()) $location.hash('');
                this.alert();
            } else {
                $state.go('Home');
            }
        }
    }
    angular.module('app').controller('HoldingController', HoldingController);
}
