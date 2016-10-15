namespace app.Controllers {

    export class VerifyController{
        public name;
        public date;
        public dob;

        constructor(private UserService: app.Services.UserService, private moment, private $state: ng.ui.IStateService, private ErrorService: app.Services.ErrorService){

        }

        public verify() {
            this.date = this.moment(this.date).format("MM/DD/YYYY");
            this.dob = this.moment(this.dob).format("MM/DD/YYYY");

            this.date = this.date.toString();
            this.dob = this.dob.toString();
            let body = {
                name: this.name,
                date: this.date,
                dob: this.dob
            }

            console.log(body);

            this.UserService.verifyUser(body).then((res) =>{
                this.ErrorService.toast("Service Verified", null);
                this.$state.go('Welcome');
            }, (err) =>{
                this.ErrorService.sweetAlert("Error", err.data.message, "warning");
                this.$state.go("Pending");
            })
        }
    }
    angular.module('app').controller("VerifyController", VerifyController);
}
