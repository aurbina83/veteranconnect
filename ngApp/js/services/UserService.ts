namespace app.Services {
    export class UserService {
        public status = { _id: null, name: null, branch: null, imgUrl: null, lng: null, lat: null, maxDist: 80.5};
        private user;

        private getUser(id: string) {
            let q = this.$q.defer();
            this.$http.get('/api/v1/users/' + id, null).then((res)=>{
                this.user = res.data;
                q.resolve();
            })
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
          let q = this.$q.defer();
          let token = this.getToken();
          let u = JSON.parse( atob( token.split('.')[1] ) );
          this.getUser(u._id).then(()=>{
              this.status._id = u._id;
              this.status.name = u.firstName + " " + u.lastName;
              this.status.imgUrl = u.imgUrl;
              this.status.branch = this.user.branch;
              q.resolve();
          });
          return q.promise;
        }


        public update(id: string){
            let q = this.$q.defer();
            this.$http.put('/api/v1/users/' + id, null).then((res) => {
                q.resolve();
            });
            return q.promise;
        }

        public getLocation(){
            let q = this.$q.defer();
            navigator.geolocation.getCurrentPosition((position)=>{
                this.$timeout(()=>{
                    this.status.lat = position.coords.latitude;
                    this.status.lng = position.coords.longitude;
                    console.log(this.status);
                    q.resolve();
                })
            });
            return q.promise;
        }

        public clearUser() {
          this.status._id = null;
          this.status.name = null;
          this.status.branch = null;
          this.status.lng = null;
          this.status.maxDist = null;
          this.status.imgUrl = null;
        }


        constructor(
            private $http: ng.IHttpService,
            private $q: ng.IQService,
            private $window: ng.IWindowService,
            private $timeout: ng.ITimeoutService
        ){
            if(this.getToken()) this.setUser();
            this.getLocation();
        }
    }
    angular.module('app').service('UserService', UserService);
}
