namespace app.Services {
    export class YelpService {

    public yelpSearch({term, location}){
        let q = this.$q.defer();
        // this.$http.get('/api/v1/yelp/search', {term: term, location: location}).then((data)=>{
        //     q.resolve(data);
        // });
        return q.promise;
    }
        constructor(private $http: ng.IHttpService, private $q: ng.IQService){};
    }
    angular.module('app').service('YelpService', YelpService);
}
