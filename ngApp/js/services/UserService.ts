namespace app.Services {
    export class UserService {
        public status = { _id: null, name: null, imgUrl: null, maxDist: null, loc: null, verified: null, branch: null, locStamp: null };

        public login(user) {
            let q = this.$q.defer();
            this.$http.post('/api/v1/users/login', user).then((res) => {
                this.setToken(res.data['token']);
                this.setUser();
                q.resolve();
            })
            return q.promise;
        }

        public register(id, {email, branch, branchImg}) {
            let q = this.$q.defer();
            this.$http.put('/api/v1/users/register/' + id, { email: email, branch: branch, branchImg: branchImg }).then((res) => {
                this.setToken(res.data['token']);
                this.setUser();
                q.resolve();
            });
            return q.promise;
        }

        public getToken() {
            return this.$window.localStorage.getItem('token');
        }

        public setToken(token: string) {
            this.$window.localStorage.setItem('token', token);
        }

        public logout() {
            this.$window.localStorage.removeItem('token');
            this.clearUser();
            this.$state.go('Login')
        }

        public getAccessCode() {
            return this.$window.localStorage.getItem('access_code');
        }

        public setAccessCode(access_code: string) {
            this.$window.localStorage.setItem('access_code', access_code);
        }

        public removeAccessCode() {
            this.$window.localStorage.removeItem('access_code');
        }

        public setUser() {
            let token = this.getToken();
            let u = JSON.parse(this.urlBase64Decode(this.getToken().split('.')[1]));
            this.status._id = u._id;
            this.status.name = u.firstName + " " + u.lastName;
            this.status.imgUrl = u.imgUrl;
            this.status.branch = u.branch;
            this.status.verified = u.verified;
            if (u.loc) {
                this.status.loc = u.loc;
                this.status.locStamp = u.locStamp;
            }
        }


        public updateLoc(id: string, {loc, stamp}) {
            let q = this.$q.defer();
            this.$http.put('/api/v1/users/location/' + id, { loc: loc, locStamp: stamp }).then((res) => {
                this.setToken(res.data['token']);
                this.setUser();
                q.resolve();
            });
            return q.promise;
        }

        public checkLocation() {
            let date = Date.now();
            if (this.status.locStamp && this.status.locStamp < date && this.status.locStamp != undefined) {
                this.getLocation();
            } else if (this.status.locStamp == undefined) {
                this.status.locStamp = date;
            }
        }

        public getLocation() {
            let q = this.$q.defer();
            let success = (position) =>{
                let lat = position.coords.latitude;
                let lng = position.coords.longitude;
                let loc = [lng, lat];
                let stamp = position.timestamp;
                stamp += (10 * 60 * 1000);
                this.status.loc = loc;
                this.updateLoc(this.status._id, { loc: loc, stamp: stamp });
                q.resolve();
            }

            let error = () =>{
                this.ErrorService.sweetAlert("Location Unavailable", "We were unable to find your location. If you're on a phone and have reception, make sure you have location permissions turned on in your phone or browswer settings. Try closing the tab and re-opening.", "warning");
            }

            let options = {
                timeout : 10000
            }

            navigator.geolocation.getCurrentPosition(success, error, options);
            return q.promise;
        }

        public clearUser() {
            this.status._id = null;
            this.status.name = null;
            this.status.maxDist = null;
            this.status.imgUrl = null;
            this.status.branch = null;
            this.status.loc = null;
            this.status.verified = null;
            this.status.locStamp = null;
        }

        public urlBase64Decode(str) {
            var output = str.replace(/-/g, '+').replace(/_/g, '/');
            switch (output.length % 4) {
                case 0: { break; }
                case 2: { output += '=='; break; }
                case 3: { output += '='; break; }
                default: {
                    throw 'Illegal base64url string!';
                }
            }

            return decodeURIComponent(encodeURIComponent(this.$window.atob(output))); //polifyll https://github.com/davidchambers/Base64.js
        }

        public userCheck() {
            if (!this.getToken()) this.$state.go('Login');
            if (this.getToken() && !this.status.branch) this.$state.go('Register');
            if (this.getToken() && !this.status.verified) this.$state.go('Pending');
        }



        constructor(
            private $http: ng.IHttpService,
            private $q: ng.IQService,
            private $window: ng.IWindowService,
            private $timeout: ng.ITimeoutService,
            private $state: ng.ui.IStateService,
            private ErrorService: app.Services.ErrorService
        ) {
            if (this.getToken()) {
                if (this.getToken() == null) {
                    this.logout();
                } else {
                    this.setUser();
                    this.checkLocation();
                }
            }
        }
    }
    angular.module('app').service('UserService', UserService);
}
