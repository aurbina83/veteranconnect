namespace app.Controllers {
    export class EventDetailController {
        public event: app.i.IEvent;
        public comment;
        public status;
        public attending = [];

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
            private UserService: app.Services.UserService,
            private CommentService: app.Services.CommentService,
            private $state: ng.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService
        ){
            EventService.getOne($stateParams['id']).then((res)=>{
                this.event = res;
                let hold = this.event.attending;
                console.log(hold);
                for (let i = 0; i < hold.length; i++){
                    this.attending.push(hold[i]._id);
                }
            });
            this.status = UserService.status;
            UserService.userCheck();
        }
    }
    angular.module('app').controller('EventDetailController', EventDetailController);
}
