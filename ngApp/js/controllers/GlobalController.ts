namespace app.Controllers {
  export class GlobalController {
    public status;

    public openLeftMenu = function() {
        this.$mdSidenav('left').toggle();
    };

    constructor(private UserService: app.Services.UserService, private $mdSidenav) {
      this.status = UserService.status;
    }
  }

  angular.module('app').controller('GlobalController', GlobalController);
}
