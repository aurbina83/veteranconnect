namespace app.Controllers {
    export class WelcomeController {

        constructor (private UserService: app.Services.UserService) {
            UserService.userCheck();
        }
    }
    angular.module('app').controller("WelcomeController", WelcomeController);
}
