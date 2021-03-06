import * as express from 'express';
import * as mongoose from 'mongoose';
import { Access, IAccessModel } from './model';
import { User, IUserModel} from '../Users/model';
import {transporter, welcome} from '../utils/mailHelper';
var unirest = require('unirest');

export function create(req: express.Request, res: express.Response, next: Function) {
    let a = new Access();
    let date = new Date();
    let days = 7;
    a.code = a.generate();
    a.expiresAt = new Date(date.getTime() + (days * 24 * 60 * 60 * 1000));
    if (req.headers['x-ids-key'] == process.env.ID_SERVICE_KEY) {
        Access.create(a, (err, access) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json({ 'discount_code': a.code.toString() });
        })
    } else {
        return next({ message: 'You dont have access' });
    }
}

export function remove(req: express.Request, res: express.Response, next: Function) {
    Access.findOneAndRemove({
        code: req.params.code
    }, (err, code) => {
        if (err) {
            console.log(err);
            return next(err);
        }
        if (!code) return next({ message: "Verification is expired or unauthorized!" });
        if (code) {
            console.log(code);
            User.findOneAndUpdate({ _id: req['payload']._id }, { $set: { verified: true } }, { new: true }, (err, user) => {
                if (err) return next({ message: "The verification process is expired or unauthorized" });
                let mailOptions = {
                    from: 'Veteran Connect <info@veteranconnect.co>',
                    to: user.email,
                    subject: `Welcome to Veteran Connect, ${user.firstName}!`,
                    html: welcome(user)
                };
                transporter.sendMail(mailOptions, (err) => {
                    if (err) {
                        console.log(err);
                        return next(err);
                    }
                    res.json({ token: user.generateJWT() });
                })
            })
        }
    });
}

export function verify(req: express.Request, res: express.Response, next: Function) {
    unirest.post("https://gruntroll-military-verification-v1.p.mashape.com/verify/active")
        .header("X-Mashape-Key", process.env.MASHAPE)
        .header("Content-Type", "application/x-www-form-urlencoded")
        .header("Accept", "text/plain")
        .send(`date=${req.body.date}`)
        .send(`dob=${req.body.dob}`)
        .send(`name=${req.body.name}`)
        .end((result) => {
            let obj = JSON.parse(result.body);
            if (obj.error != null) {
                console.log(obj.error);
                console.log(obj.message);
                return next({ message: obj.message });
            }
            if (obj.is_active > 0 || obj.is_veteran > 0) {
                User.findOneAndUpdate({ _id: req['payload']._id }, { $set: { verified: true } }, { new: true }, (err, user) => {
                    if (err) return next({ message: "The verification process is expired or unauthorized" });
                    if (user.email) {
                        let mailOptions = {
                            from: 'Veteran Connect <info@veteranconnect.co>',
                            to: user.email,
                            subject: `Welcome to Veteran Connect, ${user.firstName}!`,
                            html: welcome(user)
                        };
                        transporter.sendMail(mailOptions, (err) => {
                            if (err) {
                                console.log(err);
                                return next(err);
                            }
                        })
                    }
                    res.json({ token: user.generateJWT() });
                })
            } else if (obj.is_active == 0 && obj.is_veteran == 0) {
                return next({ message: "Unable to verify your service!" });
            }
        });
}
