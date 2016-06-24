namespace app.Controllers {
    export class EventDetailController {
        public event: app.i.IEvent;
        public comment;
        public status;
        public isLoading = true;
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
                this.isLoading = false;
                this.event = res;
                // for(let i = 0; i < this.event.attending.length; i++){
                //     this.attending.push(this.event.attending[i]['_id']);
                // }
                this.event.attending.map((i)=>{
                    this.attending.push(i['_id']);
                })
            });
            this.status = UserService.status;
            UserService.userCheck();
        }
    }
    angular.module('app').controller('EventDetailController', EventDetailController);
}
