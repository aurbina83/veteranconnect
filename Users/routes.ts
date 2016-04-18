import * as express from 'express';
import { controller } from './controller';
import { User } from './model';

const router = express.Router();
const ctrl = controller(User);
const passport = require('passport');

//Base Url-- /api/v1/users

//POST /api/v1/users/login
router.post('/login', ctrl.login);


//FACEBOOK
router.get('/auth/facebook',passport.authenticate('facebook',{session:false}));

router.get('/auth/facebook/callback',passport.authenticate('facebook',{session:false}),(req,res,next) => {
  res.redirect('/?code=' + req['tempUser'].generateJWT());
});

//GET /api/v1/users/:id
router.get('/:id', ctrl.findOne)

//POST /api/v1/users/register
router.put('/register/:id', ctrl.update);

//PUT /api/v1/users/:id
router.put('/:id', ctrl.update);

export = router;
