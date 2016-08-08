namespace app.Services {
    export class ErrorService {

        public error (e) {
            this.$mdDialog.show(
                this.$mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('Error Warning')
                    .textContent(e)
                    .ariaLabel('Alert Dialog')
                    .ok('Ok')
                );
        }
        constructor (private $mdDialog) {}
    }
    angular.module('app').service('ErrorService', ErrorService);
}
