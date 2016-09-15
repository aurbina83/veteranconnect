namespace app.Controllers {
    declare var io;
    export class EventDetailController {
        public event: app.i.IEvent;
        public comment;
        public status;
        public isLoading = true;
        public attending = [];
        public socket;

        public socketM() {
            let name = this.status.name.split(' ');
            let date = new Date();
            let message = {
                event: this.event._id,
                message: this.comment.message,
                user: {
                    firstName: name[0],
                    lastName: name[1],
                    imgUrl: this.status.imgUrl
                },
                datePosted: date
            }
            this.socket.emit('message', message);
            this.createComment();
        }


        public createComment() {
          this.comment.event = this.event._id;
          this.CommentService.create(this.comment).then((res) => {
            this.comment.message = "";
        }, (err)=>{
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
        ){
            EventService.getOne($stateParams['id']).then((res)=>{
                this.isLoading = false;
                this.event = res;
                this.event.attending.map((i)=>{
                    this.attending.push(i['_id']);
                })
                this.socket = io();
                this.socket.emit('join', {event: this.event._id});
            }, (err)=>{
                ErrorService.toast(err.data.message, "warning");
            });
            this.status = UserService.status;
            UserService.userCheck();
            this.socket.on('receive', (data) =>{
                this.event.comments.push(data);
            });
        }
    }
    angular.module('app').controller('EventDetailController', EventDetailController);
}
