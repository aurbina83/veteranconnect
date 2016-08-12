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
                this.places = res.data['businesses'];
                this.fetch = true;
            },
                (err) => {
                    this.ErrorService.sweetAlert("Damn!", err.data.message, "warning");
                })
        }

        //Yelp Pagination
        public moreYelp() {
            this.count += 20;
                this.fetch = false;
                this.$http.get('/api/v1/yelp/search?term=' + this.term + "&location=" +
                    this.location + "&cll=" + this.status.loc[1] + "," + this.status.loc[0] + "&offset=" + this.count +"&limit = 20").then((res) => {
                    this.places = this.places.concat(res.data['businesses']);
                    this.fetch = true;
                    this.count += 20;
                },
                    (err) => {
                        this.ErrorService.sweetAlert("Damn!!", err.data.message, "warning");
                    })
            }

        public update() {
          this.EventService.update(this.event).then((res) => {
            this.ErrorService.toast("Event Updated!", "success");
            this.$state.go('My Events');
        }, (err)=>{
            this.ErrorService.toast(err.data.message, "warning");
        });
        }

        constructor(
            private EventService: app.Services.EventService,
            private $state: ng.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService,
            private UserService: app.Services.UserService,
            private $http: ng.IHttpService,
            private ErrorService: app.Services.ErrorService
        ){
            this.status = UserService.status;
            EventService.getOne($stateParams['id']).then((res)=>{
                this.event = res;
            }, (err)=>{
                ErrorService.toast(err.data.message, "warning");
            });
            UserService.userCheck();
            for (let i = 2; i <= 100; i++) {
                this.arr.push(i);
            }
        }
    }
    angular.module('app').controller('EventUpdateController', EventUpdateController);
}
