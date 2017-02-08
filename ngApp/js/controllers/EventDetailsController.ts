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
                this.$state.reload();
                this.comment.message = "";
            }, (err) => {
                this.ErrorService.toast(err.data.message, "warning");
            });
        }

        constructor(
            private EventService: app.Services.EventService,
            private ErrorService: app.Services.ErrorService,
            private UserService: app.Services.UserService,
            private CommentService: app.Services.CommentService,
            private $state: ng.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService
        ) {
            EventService.getOne($stateParams['id']).then((res) => {
                this.isLoading = false;
                this.event = res;
                this.event.attending.map((i) => {
                    this.attending.push(i['_id']);
                })
                this.status = UserService.status;
                UserService.userCheck();
            })
        }
    }
    angular.module('app').controller('EventDetailController', EventDetailController);
}
