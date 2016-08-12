namespace app.Controllers{
    export class MyEventController {
        public status;
        public events;
        public isLoading = true;

        public removeEvent(e: app.i.IEvent) {
          this.EventService.remove(e._id).then((res) => {
            this.ErrorService.toast("Event Deleted");
            this.events.splice(this.events.indexOf(e), 1);
        }, (err)=>{
            this.ErrorService.toast(err.data.message);
        });
        }

        public go(e){
            this.$state.go('Event Details', {id: e._id});
        }

        constructor(private UserService: app.Services.UserService, private EventService: app.Services.EventService, private $state: ng.ui.IStateService, private ErrorService: app.Services.ErrorService){
            UserService.userCheck();
            this.status = UserService.status;
            EventService.getMine(this.status._id).then((res)=>{
                this.events = res;
                this.isLoading = false;
            }, (err)=>{
                this.ErrorService.toast(err.data.message);
            });
        }
    }
    angular.module('app').controller('MyEventController', MyEventController);
}
