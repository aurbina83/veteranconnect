namespace app.Controllers {
    declare var io;
    export class WelcomeController {
        public socket;
        public url = "localhost:3000"
        public message = {
            message: 'dicks',
            room:  '57b6124de7d8201f045115f0',
            user: '572a7fd28ab7813506fd10bb'
        }
        constructor (private UserService: app.Services.UserService) {
            UserService.userCheck();
            this.socket = io(this.url);
            this.socket.emit( 'join', {room: '57b6124de7d8201f045115f0'});
            this.socket.emit('message', this.message);
        }
    }
    angular.module('app').controller("WelcomeController", WelcomeController);
}
