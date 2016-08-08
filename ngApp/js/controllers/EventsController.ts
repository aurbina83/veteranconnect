namespace app.Controllers{
    export class EventsController {
        public events;
        public status;
        public fetch = true;

        public distance = 15;

        public showAlert() {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            this.$mdDialog.show(
                this.$mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('HEY YOU!')
                    .textContent('You are already in this event. Carry on.')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
                );
        };

        public setDistance() {
            this.status.maxDist = this.distance * 1.6;
        }

        public attend(e) {
            for (let i = 0; i < e.attending.length; i++){
                if (e.attending[i]._id == this.status._id) {
                    return this.showAlert();
                }
            }
            this.EventService.attending(e._id).then(() => {
                this.$state.go('Attending');
            },
            (err) =>{
                console.log("hola");
                this.ErrorService.error(err.message);
            })
        }

        ///$mdDialog
        public details(e) {
            this.$mdDialog.show({
                locals: { e: e },
                controller: "DialogController as vm",
                templateUrl: '/templates/details.html',
                clickOutsideToClose: true,
            })
        };

        constructor(private EventService: app.Services.EventService, private $scope: ng.IScope, private UserService: app.Services.UserService, private $mdDialog, private $state: ng.ui.IStateService, private ErrorService) {
            this.status = EventService.status;
            UserService.userCheck();
            UserService.status.maxDist = 24;
            EventService.getAll({ lng: this.status.loc[0], lat: this.status.loc[1], maxDist: this.status.maxDist }).then((res) => {
                this.events = res;
                this.fetch = false;
            });

            $scope.$watch(() => this.status, (newValue, oldValue) => {
                this.fetch = true;
                if (newValue !== oldValue) {
                    EventService.getAll({ lng: this.status.loc[0], lat: this.status.loc[1], maxDist: this.status.maxDist }).then((res) => {
                        this.events = res;
                        this.fetch = false;
                    });
                }
            }, true);
        }
    }
    angular.module('app').controller('EventsController', EventsController);

    export class DiaglogController {
        public event = this.e;
        public cancel() {
            this.$mdDialog.cancel();
        };

        constructor(private $mdDialog, private e) { }
    }
    angular.module('app').controller("DialogController", DiaglogController);

}
