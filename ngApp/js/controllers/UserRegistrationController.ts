namespace app.Controllers {
    export class UserRegistrationController {
        public user: app.i.IUser;
        public status;
        public mos;
        public max;
        public pattern;
        public patternMessage;

        public branches = ['Army', 'Navy', 'Marines', 'Air Force'];

        public email = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        public password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

        public setMos(){
            if(this.user.branch == "Army"){
                this.mos = "MOS";
                this.max = 3;
                this.pattern =/^[a-zA-Z0-9]+$/;
                this.patternMessage = "Two numbers and one letter only. No AKIs or SQIs"
                this.user.branchImg = "images/army.png"
            }
            if(this.user.branch == "Marines"){
                this.mos = "MOS";
                this.max = 4;
                this.pattern = /^[0-9]+$/;
                this.patternMessage = "Four numbers only. No other identifiers please."
                this.user.branchImg = "images/marines.png"
            }
            if(this.user.branch == "Air Force") {
                this.mos = "AFSC";
                this.max = 5;
                this.pattern = /^[a-zA-Z0-9]+$/;
                this.patternMessage = "Numbers and letters only"
                this.user.branchImg = "images/airforce.png"
            }
            if(this.user.branch == "Navy") {
                this.mos = "GENERAL & SERVICE RATING ABBREVIATION";
                this.max = 3;
                this.pattern = /^[a-zA-Z]+$/;
                this.patternMessage = "Max of 3 letters please. No rank or other identifiers please."
                this.user.branchImg = "images/navy.png"
            }
        }
        public register(id, email, branch, mos) {
            this.user.email = this.user.email.toLowerCase().trim();
            this.user.mos = this.user.mos.toUpperCase();
            this.UserService.register(this.status._id, {email: this.user.email, branch: this.user.branch, mos: this.user.mos, branchImg: this.user.branchImg}).then(()=>{
                this.$state.go('Verify');
            });


        }
        constructor(private UserService: app.Services.UserService, private $state: ng.ui.IStateService, private $location: ng.ILocationService)
        {
            this.status = UserService.status;
        }
    }
    angular.module('app').controller('UserRegistrationController', UserRegistrationController);
}
