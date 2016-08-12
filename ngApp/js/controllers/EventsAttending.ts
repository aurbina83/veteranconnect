namespace app.Controllers {
    export class AttendingEvents {
        public status;
        public events;
        public isLoading = true;

        public notAttending(e: app.i.IEvent){
            this.EventService.notAttending(e._id).then((res)=>{
                this.ErrorService.toast(res['message']);
                this.events.splice(this.events.indexOf(e), 1);
            }, (err)=>{
                this.ErrorService.toast(err.data.message);
            })
        }

        public go(e){
            this.$state.go('Event Details', {id: e._id});
        }

        constructor(private EventService: app.Services.EventService, private UserService: app.Services.UserService, private $state: ng.ui.IStateService, private ErrorService: app.Services.ErrorService){
            this.status = UserService.status;
            UserService.userCheck();
            EventService.getAttending(this.status._id).then((res)=>{
                this.events = res;
                this.isLoading = false;
            }, (err)=>{
                ErrorService.toast(err.data.message);
            })
        }
    }
    angular.module('app').controller('AttendingEvents', AttendingEvents);
}
