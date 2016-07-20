namespace app.Controllers {
    export class EventUpdateController {
        public status;
        public event: app.i.IEvent;
        public arr = [];
        public places;
        public result;
        public term;
        public location;
        public count;
        public fetch = true;
        public message;
        public hide;

        //Min date for DateTime Picker
        public date = new Date();

        //Set Rally Point to the Event
        public rallyPoint(p) {
            this.event.name = p.name;
            this.event.eventAddress = p.location.display_address;
            this.event.loc = [p.location.coordinate.longitude, p.location.coordinate.latitude];
            this.event.city = p.location.city;
            this.event.state = p.location.state_code;
        }

        //Yelp Search
        public searchYelp() {
            this.count = 0;
            this.fetch = false;
            this.$http.get('/api/v1/yelp/search?term=' + this.term + "&location=" +
                this.location + "&cll=" + this.status.loc[1] + "," + this.status.loc[0] + "&sort=0" + "&offset=" + this.count + "&limit = 20"
                ).then((res) => {
                this.result = res.data;
                this.result = this.result.businesses;
                this.places = this.result;
                this.fetch = true;
            },
                (err) => {
                    this.message = err.data.message;
                })
        }

        //Yelp Pagination
        public moreYelp() {
            this.count += 20;
            this.fetch = false;
            this.$http.get('/api/v1/yelp/search?term=' + this.term + "&location=" +
                this.location + "&cll=" + this.status.loc[1] + "," + this.status.loc[0] + "&offset=" + this.count + "&limit = 20"
                ).then((res) => {
                this.result = res.data;
                this.result = this.result.businesses;
                for (let i = 0; i < this.result.length; i++) {
                    this.places.push(this.result[i]);
                }
                this.fetch = true;
                // for(let i = 0; i < this.result.length; i++){
                //     this.places.push(this.result[i]);
                // }
                this.count += 20;
            },
                (err) => {
                    this.message = err.data.message;
                })
        }

        public update() {
          this.EventService.update(this.event).then((res) => {
            this.$state.go('My Events');
          });
        }

        constructor(
            private EventService: app.Services.EventService,
            private $state: ng.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService,
            private UserService: app.Services.UserService,
            private $http: ng.IHttpService
        ){
            this.status = UserService.status;
            EventService.getOne($stateParams['id']).then((res)=>{
                this.event = res;
            });
            UserService.userCheck();
            for (let i = 2; i <= 100; i++) {
                this.arr.push(i);
            }
        }
    }
    angular.module('app').controller('EventUpdateController', EventUpdateController);
}
