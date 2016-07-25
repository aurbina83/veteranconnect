namespace app.Controllers {
    export class UserLoginController {
        public status;

        // public login() {
        //     this.UserService.login(this.user).then(() => {
        //         this.$state.go('Home');
        //         this.user.email = '';
        //         this.user.password = '';
        //     });
        // }

        constructor(private UserService: app.Services.UserService, private $state: ng.ui.IStateService) {
            this.status = UserService.status;
            if(this.status._id) {
                this.$state.go('Home');
            }
        }
    }

    angular.module('app').controller('UserLoginController', UserLoginController);
}
