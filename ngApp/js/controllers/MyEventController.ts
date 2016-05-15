namespace app.Controllers{
    export class MyEventController {
        public status;
        public events;
        public user;

        public removeEvent(e: app.i.IEvent) {
          this.EventService.remove(e._id).then(() => {
            this.events.splice(this.events.indexOf(e), 1);
          });
        }

        public go(e){
            this.$state.go('Event Details', {id: e._id});
        }

        constructor(private UserService: app.Services.UserService, private EventService: app.Services.EventService, private $state: ng.ui.IStateService){
            UserService.userCheck();
            this.status = UserService.status;
            this.events = EventService.getMine(this.status._id);
        }
    }
    angular.module('app').controller('MyEventController', MyEventController);
}
