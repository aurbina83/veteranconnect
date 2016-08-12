namespace app.Services {
  export class ErrorService {

    public toast(message, theme) {
        this.$mdToast.show(
            this.$mdToast.simple()
            .textContent(message)
            .position('bottom right')
            .hideDelay(3000)
            .theme(theme)
        );
    }

    public sweetAlert (title, message, type) {
      this.SweetAlert.swal(title, message, type);
    }

    public sweetAlertReload ( title, message ){
        this.SweetAlert.swal({
            title: title,
            text: message,
            type: null,
            allowOutsideClick: true,
            showCancelButton: false,
            confirmButtonColor: "#B5191D",
            confirmButtonText: "Ok!",
            closeOnConfirm: true
        },
        () =>  {
            this.$state.reload();
        });
    }

    public sweetAlertRoute (title, message, state) {
        this.SweetAlert.swal({
            title: title,
            text: message,
            type: "warning",
            allowOutsideClick: true,
            showCancelButton: false,
            confirmButtonColor: "#B5191D",
            confirmButtonText: "Ok!",
            closeOnConfirm: true
        },
        () =>  {
            this.$state.go(state);
        });
    }
    constructor(private SweetAlert, private $mdToast, private $state: ng.ui.IStateService) { }
  }
  angular.module('app').service('ErrorService', ErrorService);
}
