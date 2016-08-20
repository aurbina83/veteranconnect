import * as express from 'express';
import * as mongoose from 'mongoose';
import { IUserModel } from './model';

export function controller(User: mongoose.Model<IUserModel>) {
    return {
        login: login,
        register: register,
        findOne: findOne,
        update: update,
        updateLoc: updateLoc
    }
    function login(req: express.Request, res: express.Response, next: Function) {
      if (!req.body.email) return next({ message: 'An email is required to login.' });
      if (!req.body.password) return next({ message: 'A password is required to login.' });

      User.findOne({ email: req.body.email })
        .exec((err, user) => {
          if (err) return next(err);
          if (!user) return next({ message: 'Incorrect email/password combination.' });
          user.comparePassword(req.body.password, (err, isMatch) => {
            if (err) return next(err);
            if (!isMatch) return next({ message: 'Incorrect email/password combination.' });
            else res.json({ token: user.generateJWT() });
          });
        });
    }

    function register(req: express.Request, res: express.Response, next: Function) {
      let u = new User(req.body);
      u.hashPassword(req.body.password, (err, hash) => {
        if (err) return next(err);
        u.password = hash;
        u.save((err, user: IUserModel) => {
          if (err) return next(err);
          res.json({ token: user.generateJWT() });
        });
      });
    }

    function findOne(req: express.Request, res: express.Response, next: Function) {
        User.findOne({_id: req.params.id})
        .select('-facebook -email -attending -events')
        .exec((err, data) => {
            if (err) return next (err);
            res.json(data);
        });
    }


    function update (req: express.Request, res: express.Response, next: Function) {
        User.findOneAndUpdate({_id: req.params.id},
            {$set: {
            branch: req.body.branch,
            email: req.body.email,
            mos: req.body.mos,
            branchImg: req.body.branchImg
        }}, {new: true}, (err, user) => {
            if(err) return next(err);
            res.json({token: user.generateJWT()});
        });
    }

    function updateLoc (req: express.Request, res: express.Response, next: Function) {
        User.findOneAndUpdate({_id: req.params.id}, {$set: {loc: req.body.loc, locStamp: req.body.locStamp}}, {new: true}, (err, user) =>{
            if (err) return next (err);
            res.json({token: user.generateJWT()});
        })
    }

}
