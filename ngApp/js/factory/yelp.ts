let Yelp = require('yelp');

namespace app.Factory {
    export class YelpFactory {
        
        constructor(){
            return new Yelp({
                consumer_key: process.env.YELP_CONSUMER_KEY,
                consumer_secret: process.env.YELP_CONSUMER_SECRET,
                token: process.env.YELP_CONSUMER_TOKEN,
                token_secret: process.env.YELP_TOKEN_SECRET
            });
        }
    }
    angular.module('app').factory('YelpFactory', YelpFactory);
}
