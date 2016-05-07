namespace app.Controllers {
    export class EventDetailController {
        public event: app.i.IEvent;
        public comment;
        public status;
        public attending;

        public createComment() {
          this.comment.event = this.event._id;
          this.CommentService.create(this.comment).then((res) => {
            this.event.comments.push(res);
            this.comment.message = "";
            this.$state.reload();
          });
        }

        constructor(
            private EventService: app.Services.EventService,
            private CommentService: app.Services.CommentService,
            private $state: ng.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService
        ){
            EventService.getOne($stateParams['id']).then((res)=>{
                this.event = res;
                this.attending = this.event.attending;
            });
            this.status = EventService.status;
        }
    }
    angular.module('app').controller('EventDetailController', EventDetailController);
}
