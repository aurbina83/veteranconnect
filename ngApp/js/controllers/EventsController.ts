namespace app.Controllers{
    export class EventsController {
        public events;
        public status;
        public fetch = true;

        public distance = 15;

        public showAlert() {
            this.ErrorService.sweetAlert ("Slow down there, High Speed!", "You'e already in this event. Pop smoke", "warning");
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
            this.EventService.attending(e._id).then((res) => {
                this.ErrorService.toast(res['message']);
                this.$state.go('Attending');
            },
            (err) =>{
                this.ErrorService.sweetAlertReload ( "Draggin ass!",  err.data.message);
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

        constructor(private EventService: app.Services.EventService, private $scope: ng.IScope, private UserService: app.Services.UserService, private $mdDialog, private $state: ng.ui.IStateService, private ErrorService: app.Services.ErrorService) {
            this.status = EventService.status;
            UserService.userCheck();
            UserService.status.maxDist = 24;
            EventService.getAll({ lng: this.status.loc[0], lat: this.status.loc[1], maxDist: this.status.maxDist }).then((res) => {
                this.events = res;
                if (this.events.length == 0) {
                    ErrorService.sweetAlertRoute("DRY HOLE", "Looks like there aren't any events in your AO...so go create one!!.", "Create Event");
                }
                this.fetch = false;
            }, (err) =>{
                ErrorService.sweetAlert("Error", "Sorry, we're all ate up right now. Try reloading the page or checking back later.", "error");
            });

            $scope.$watch(() => this.status, (newValue, oldValue) => {
                this.fetch = true;
                if (newValue !== oldValue) {
                    EventService.getAll({ lng: this.status.loc[0], lat: this.status.loc[1], maxDist: this.status.maxDist }).then((res) => {
                        this.events = res;
                        this.fetch = false;
                    }, (err) =>{
                        ErrorService.sweetAlert("Error", "Sorry, we're all ate up right now. Try reloading the page or checking back later.", "error");
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
