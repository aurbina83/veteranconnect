namespace app.Controllers {
    export class EventCreateController {
        public event = {
                title: null,
                name: null,
                description: null,
                numGuests: null,
                /**
                 * loc: [lng, lat]
                 */
                loc: [null],
                eventAddress: null,
                dateTime: null }
        public user;
        public places;
        public result;
        public term;
        public location;
        public count;
        public fetch = true;
        public message;

        //Min date for DateTime Picker
        public date = new Date();

        //Set Rally Point to the Event
        public rallyPoint(p){
            this.event.name = p.name;
            this.event.eventAddress = p.location.display_address;
            this.event.loc = [p.location.coordinate.longitude, p.location.coordinate.latitude];
        }

        //Yelp Search
        public searchYelp(){
            this.count = 0;
            this.fetch = false;
            this.$http.get('/api/v1/yelp/search?term=' + this.term + "&location=" +
            this.location + "&cll=" + this.user.loc[1] + "," + this.user.loc[0] + "&sort=0" + "&offset=" + this.count + "&limit = 20"
        ).then((res)=>{
                this.result = res.data;
                this.result = this.result.businesses;
                this.places = this.result;
                this.fetch = true;
            },
        (err)=>{
            this.message = err.data.message;
        })
        }

        public check(){
            console.log(this.event);
        }

        //Yelp Pagination
        public moreYelp(){
            this.count += 20;
            this.fetch = false;
            this.$http.get('/api/v1/yelp/search?term=' + this.term + "&location=" +
            this.location + "&cll=" + this.user.loc[1] + "," + this.user.loc[0] +"&offset=" + this.count + "&limit = 20"
        ).then((res)=>{
                this.result = res.data;
                this.result = this.result.businesses;
                for(let i = 0; i < this.result.length; i++){
                    this.places.push(this.result[i]);
                }
                this.fetch = true;
                // for(let i = 0; i < this.result.length; i++){
                //     this.places.push(this.result[i]);
                // }
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
