namespace app.Controllers{
    export class MyEventController {
        public status;
        public events;
        public isLoading = true;

        public removeEvent(e: app.i.IEvent) {
          this.EventService.remove(e._id).then((res) => {
            this.events.splice(this.events.indexOf(e), 1);
            this.ErrorService.toast("Event Deleted", "success");
        }, (err)=>{
            this.ErrorService.toast(err.data.message, "warning");
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
                this.ErrorService.toast(err.data.message, "warning");
            });
        }
    }
    angular.module('app').controller('MyEventController', MyEventController);
}
