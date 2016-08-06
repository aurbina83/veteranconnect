import * as express from 'express';
import * as mongoose from 'mongoose';
import { Access, IAccessModel } from './model';
import { User, IUserModel} from '../Users/model';

export function create(req: express.Request, res: express.Response, next: Function){
    let a = new Access();
    let date = new Date();
    let days = 7;
    a.code = a.generate();
    a.expiresAt = new Date(date.getTime() + (days * 24 * 60 * 60 * 1000))
    console.log(req.headers);
    console.log("here");
    if(req.headers['x-ids-key'] == process.env.ID_SERVICE_KEY) {
        Access.create(a, (err, access) =>{
            if(err) return next (err);
            res.json({'discount_code': a.code.toString()});
         })
    } else {
        return next ({message: 'You dont have access'});
    }
}

export function remove(req: express.Request, res: express.Response, next: Function) {
    Access.findOneAndRemove({
        code: req.params.code
    }, (err, code)=>{
        if (err) return next (err);
        if (!code) return next ({message: "The verification process is expired or unauthorized"});
        if (code) {
            console.log(code);
            User.findOneAndUpdate({_id: req['payload']._id}, { $set: {verified: true} }, { new: true }, (err, user)=>{
                if (err) return next ({message: "The verification process is expired or unauthorized"});
                res.json({token: user.generateJWT()});
            })
        }
    });
}
