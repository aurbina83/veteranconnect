namespace app.Controllers {

    export class VerifyController{

        constructor(private $location: ng.ILocationService, private UserService: app.Services.UserService){
            if($location.search().mobile) {
                UserService.setMobile($location.search().mobile);
            }
        }
    }
    angular.module('app').controller("VerifyController", VerifyController);
}
