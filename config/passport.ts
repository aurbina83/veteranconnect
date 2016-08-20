let passport = require('passport');
let FacebookStrategy = require('passport-facebook').Strategy;

import { User } from '../Users/model';

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
//
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//   done(err, user);
//   });
// });

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'first_name', 'last_name', 'picture.type(large)'],
    passReqToCallback: true
  },
  function(req, accessToken, refreshToken, profile, next) {
    User.findOne({ 'facebook.id': profile.id }).exec((err, user) => {
      if (err) return next(err);
      if (user) {
        req['tempUser'] = user;
        user.imgUrl = profile.photos[0].value;
        User.update({_id: user._id}, user, (err, user)=>{
            if(err) return next (err);
            next(null, user);
        })
      } else {
        let u = new User();
        u.firstName = profile.name.givenName;
        u.lastName = profile.name.familyName;
        u.imgUrl = profile.photos[0].value;
        u.facebook.id = profile.id;
        u.facebook.token = accessToken;
        u.save((err, user) => {
          if (err) return next(err);
          req['tempUser'] = user;
          next(null, user);
        });
      }
    });
  }));


  export = passport;
