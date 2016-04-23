namespace app.Controllers {
    export class EventCreateController {
        public event: app.i.IEvent;
        public user;
        public places;
        public result;
        public term;
        public location;
        public count;
        public message;

        //Min date for DateTime Picker
        public date = new Date();

        public searchYelp(){
            this.count = 0;
            this.$http.get('/api/v1/yelp/search?term=' + this.term + "&location=" +
            this.location + "&cll=" + this.user.loc[1] + "," + this.user.loc[0] +"&offset=" + this.count + "&limit = 20"
        ).then((res)=>{
                this.result = res.data;
                this.result = this.result.businesses;
                this.places = this.result;
            },
        (err)=>{
            this.message = err.data.message;
        })
        }

        public moreYelp(){
            this.count += 20;
            this.$http.get('/api/v1/yelp/search?term=' + this.term + "&location=" +
            this.location + "&cll=" + this.user.loc[1] + "," + this.user.loc[0] +"&offset=" + this.count + "&limit = 20"
        ).then((res)=>{
                this.result = res.data;
                this.result = this.result.businesses;
                for(let i = 0; i < this.result.length; i++){
                    this.places.push(this.result[i]);
                }
                this.count += 20;
            },
        (err)=>{
            this.message = err.data.message;
        })
        }


        constructor(
            private EventService: app.Services.EventService,
            private $state: ng.ui.IStateService,
            private UserService: app.Services.UserService,
            private $http: ng.IHttpService
        ){
            this.user = UserService.user;
        }
    }
    angular.module('app').controller('EventCreateController', EventCreateController);
}
