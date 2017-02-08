import * as express from 'express';
let Yelp = require('yelp');
import * as jwt from 'express-jwt';


const router = express.Router();
const yelp = new Yelp({
    consumer_key: process.env.YELP_CONSUMER_KEY,
    consumer_secret: process.env.YELP_CONSUMER_SECRET,
    token: process.env.YELP_TOKEN,
    token_secret: process.env.YELP_TOKEN_SECRET
})

const auth = jwt({
    userProperty: 'payload',
    secret: process.env.JWT_SECRET
});

router.get("/search", function(req, res, next){
  yelp.search(req.query, function(error, data) {
    if(error) {
        console.log(error);
        return next ({message: "Well this is embarrasing, try again in a couple of minutes"});
    }
    res.send(data);
  });
});


router.get("/business/:id", function(req, res, next){
  yelp.search(req.params.id, function(error, data) {
    if(error)return next ({message: "Well this is embarrassing, try again in a couple of minutes."});
    res.json(data);
  });
});

export = router;
