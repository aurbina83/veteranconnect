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
            city: null,
            state: null,
            dateTime: null
        }
        public status;
        public places;
        public result;
        public term;
        public location;
        public count;
        public fetch = true;
        public message;
        public hide;
        public arr = [];
        // public category = ["Drinks", "Food", "Food-Drinks", "Hunting-Fishing", "Camping-Hiking", "Sports", "Fitness", "Shooting", "Outdoor Recreation", "Indoor Recreation", "Public Event", "Sporting Event", "Music Event"];
        // public categorySelected;

        //Min date for DateTime Picker
        public date = new Date();

        // //Set Category
        // public setCategory(){
        //     this.event.category = this.categorySelected;
        // }

        //Set Rally Point to the Event
        public rallyPoint(p) {
            this.event.name = p.name;
            this.event.eventAddress = p.location.address;
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
        /**
         * Submit event
         * @return {[err]} [error message]
         */
        public submit(){
            this.EventService.createEvent(this.event).then((res)=>{
                this.ErrorService.toast("Event Created!", "success");
                this.$state.go("My Events");
            }, (err) =>{
                this.ErrorService.sweetAlert("Something went wrong!", err.data.message, "warning");
            });
        }


        constructor(
            private EventService: app.Services.EventService,
            private $state: ng.ui.IStateService,
            private UserService: app.Services.UserService,
            private $http: ng.IHttpService,
            private ErrorService: app.Services.ErrorService
            ) {
                this.status = UserService.status;
                UserService.userCheck();
                // array of numbers for num guest selection
                for(let i = 2; i < 99; i++){
                    this.arr.push(i);
                }
            }
        }
    angular.module('app').controller('EventCreateController', EventCreateController);
}
