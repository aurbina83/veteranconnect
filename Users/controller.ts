import * as express from 'express';
import * as mongoose from 'mongoose';
import { IUserModel } from './model';

export function controller(User: mongoose.Model<IUserModel>) {
    return {
        login: login,
        register: register,
        findOne: findOne,
        update: update,
        updateLoc: updateLoc,
        updatePush: updatePush
    }
    function login(req: express.Request, res: express.Response, next: Function) {
        User.findOne({'facebook.id': req.body.id}).exec((err, user) =>{
            if (err) {
                console.log(err);
                return next(err);
            }
            if (user) {
                User.findOneAndUpdate({_id: user._id}, {$set: {imgUrl: req.body.picture, 'facebook.token': req.body.token, platform: req.body.platform, appVersion: req.body.appVersion, email: req.body.email}}, {new: true}, (err, user) =>{
                    if (err) {
                        console.log(err);
                        return next(err);
                    }
                    res.json({token: user.generateJWT()});
                })
            } else {
                let u = new User();
                u.dateCreated = new Date();
                u.firstName = req.body.first_name;
                u.lastName = req.body.last_name;
                u.imgUrl = req.body.picture;
                u.facebook.id = req.body.id;
                u.facebook.token = req.body.token;
                u.platform = req.body.platform;
                u.appVersion = req.body.appVersion;
                u.email = req.body.email;
                u.save((err, user) => {
                    if (err) {
                        console.log(err);
                        return next(err);
                    }
                    res.json({token: u.generateJWT()});
                })
            }
        })
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
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json(data);
        });
    }


    function update (req: express.Request, res: express.Response, next: Function) {
        if(req.body.email){
            User.findOneAndUpdate({_id: req.params.id},
                {$set: {
                branch: req.body.branch,
                email: req.body.email,
                mos: req.body.mos,
                branchImg: req.body.branchImg
            }}, {new: true}, (err, user) => {
                if (err) {
                    console.log(err);
                    return next(err);
                }
                res.json({token: user.generateJWT()});
            });
        } else {
            User.findOneAndUpdate({_id: req.params.id},
                {$set: {
                branch: req.body.branch,
                mos: req.body.mos,
                branchImg: req.body.branchImg
            }}, {new: true}, (err, user) => {
                if (err) {
                    console.log(err);
                    return next(err);
                }
                res.json({token: user.generateJWT()});
            });
        }
    }

    function updateLoc (req: express.Request, res: express.Response, next: Function) {
        User.findOneAndUpdate({_id: req.params.id}, {$set: {loc: req.body.loc, locStamp: req.body.locStamp}}, {new: true}, (err, user) =>{
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json({token: user.generateJWT()});
        })
    }

    function updatePush(req: express.Request, res: express.Response, next: Function) {
        User.update({_id: req.params.id}, {$set: {oneSignal: req.body}}, (err, user) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json({message: "Push info updated!"});
        });
    }

}
