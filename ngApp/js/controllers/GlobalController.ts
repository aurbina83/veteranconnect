namespace app.Controllers {
  export class GlobalController {
    public status;

    public openLeftMenu = function() {
        this.$mdSidenav('left').toggle();
    };

    constructor(private UserService: app.Services.UserService, private $mdSidenav, private $state: ng.ui.IStateService) {
      this.status = UserService.status;
    }
  }

  angular.module('app').controller('GlobalController', GlobalController);
}
