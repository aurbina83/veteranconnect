namespace app.Services {
    export class UserService {
        public status = { _id: null, name: null, imgUrl: null, maxDist: null};
        public user;

        public getUser(id: string) {
            let q = this.$q.defer();
            this.$http.get('/api/v1/users/' + id, null).then((res)=>{
                q.resolve(res.data);
            });
            return q.promise;
        }

        public login(user){
            let q = this.$q.defer();
            this.$http.post('/api/v1/users/login', user).then((res) => {
                this.setToken(res.data['token']);
                this.setUser();
                q.resolve();
            })
            return q.promise;
        }

        public register(id, {email, branch, mos, branchImg}) {
          let q = this.$q.defer();
          this.$http.put('/api/v1/users/register/' + id, {email: email, branch: branch, mos: mos, branchImg: branchImg}).then((res) => {
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
        }

        public setUser() {
          let token = this.getToken();
          let u = JSON.parse(this.urlBase64Decode(this.getToken().split('.')[1]));
          this.status._id = u._id;
          this.status.name = u.firstName + " " + u.lastName;
          this.status.imgUrl = u.imgUrl;
        }


        public updateLoc(id: string, {loc}){
            let q = this.$q.defer();
            this.$http.put('/api/v1/users/' + id, {loc: loc}).then((res) => {
                q.resolve();
            });
            return q.promise;
        }

        public getLocation(){
            let q = this.$q.defer();
            navigator.geolocation.getCurrentPosition((position)=>{
                    let lat = position.coords.latitude;
                    let lng = position.coords.longitude;
                    let loc = [lng, lat];
                    this.updateLoc(this.status._id, {loc: loc});
                })
            return q.promise;
        }

        public clearUser() {
          this.status._id = null;
          this.status.name = null;
          this.status.maxDist = null;
          this.status.imgUrl = null;
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

        public userCheck (){
            if(!this.getToken()) this.$state.go('Login');
        }



        constructor(
            private $http: ng.IHttpService,
            private $q: ng.IQService,
            private $window: ng.IWindowService,
            private $timeout: ng.ITimeoutService,
            private $state: ng.ui.IStateService
        ){
            if(this.getToken()){
                this.setUser();
                this.getLocation();
            }
        }
    }
    angular.module('app').service('UserService', UserService);
}
