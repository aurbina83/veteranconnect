namespace app.Controllers {
  export class HoldingController {
    public status;

    private route() {
      if (!this.status.branch) {
        this.$state.go('Register');
      }
      if (this.status.verified) {
        this.$state.go('Welcome');
      }
    }
    constructor(
      private UserService: app.Services.UserService,
      private $location: ng.ILocationService,
      private $state: ng.ui.IStateService) {
      this.status = UserService.status;
      if ($location.search().code) {
        UserService.setToken($location.search().code);
        UserService.setUser();
        // clear query string
        $location.search('');
        if ($location.hash()) $location.hash('/hold');
      }
    }
  }
  angular.module('app').controller('HoldingController', HoldingController);
}
