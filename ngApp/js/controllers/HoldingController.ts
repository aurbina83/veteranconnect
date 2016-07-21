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
        this.$state.go('Verify')
      }
      if (this.status.verified) {
        this.$state.go('Welcome');
      }
    }

    private accessCheck() {
        if(!this.UserService.getAccessCode()) {
            this.route;
        } else {
            this.$location.path('/verified');
        }
    }
    constructor(
      private UserService: app.Services.UserService,
      private $location: ng.ILocationService,
      private $state: ng.ui.IStateService) {
      this.status = UserService.status;
      UserService.getLocation().then(()=>{
          if ($location.search().code) {
            UserService.setToken($location.search().code);
            UserService.setUser();
            // clear query string
            $location.search('');
            if ($location.hash()) $location.hash('/hold');
            this.accessCheck();
        } else {
            $state.go('Home');
        }
      })
    }
  }
  angular.module('app').controller('HoldingController', HoldingController);
}
