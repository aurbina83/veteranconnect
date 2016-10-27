import * as express from 'express';
import * as mongoose from 'mongoose';
import { QRF, IQRFModel } from './model';
import { User, IUserModel} from '../Users/model';
import { sendNotification } from '../utils/push';

(mongoose as any).Promise = global.Promise;

export function getMine(req: express.Request, res: express.Response, next: Function) {
    let date = new Date();
    QRF.find({ $or: [{creator: req['payload']._id}, {qrf: req['payload']._id}], expirationDate: {$gte: date} })
    .populate ('qrf', 'firstName lastName branch imgUrl')
    .exec((err, events) => {
        if (err) return (err);
        res.json(events)
    });
}

export function findOne(req: express.Request, res: express.Response, next: Function) {
    QRF.findOne({_id: req.params.id})
    .populate ('qrf', 'firstName lastName branch imgUrl')
    .exec((err, event) =>{
        if (err) return next (err);
        res.json(event);
    })
}

export function create(req: express.Request, res: express.Response, next: Function) {
    QRF.create(req.body, (err, event) => {
        if (err) return next (err);
        res.json({message: "QRF on the way"});
    }).then((event) =>{
        let coords = event.location;
        let maxDist = 50;
        User.find({
            // _id: {$ne: event.creator},
            loc: {
                $geoWithin: {
                    $centerSphere: [coords, maxDist/3963.2]
                }
            }
        })
        .exec((err, users) =>{
            if (err) return next (err);
            let list = [];
            users.forEach((u) => {
                list.push(u.oneSignal.id);
            })
            let message = {
                app_id: process.env.oneSignalID,
                contents: {"en" : "A veteran in your area has requested assistance!"},
                headings: {'en' : "BREAK BREAK BREAK"},
                include_player_ids: list,
                data: {"type": "qrf", "page": "QRFAcceptPage", "id": `${event._id}`}
            }
            sendNotification(message);
        })
    })
}

export function join(req: express.Request, res: express.Response, next: Function) {
    QRF.findOne({_id: req.params.id}).exec((err, event) =>{
        if (err) return next (err);
        if (event.limit < 1) return next({message: "The QRF team has already been assembled. Thank you for stepping up!"});
        QRF.update({_id: event._id}, {$push: {'qrf': req['payload']._id }, $inc: {limit: -1}}, (err)=> {
            if (err) return next (err)
            res.json({message: "You're on the QRF Team. Thank you for stepping up!"})
        });
    })
}

export function message (req: express.Request, res: express.Response, next: Function) {
    QRF.findOne({_id: req.params.id})
    .populate("qrf", "oneSignal")
    .exec((err, event) =>{
        QRF.update({_id: req.params.id}, {$push: {"messages": req.body}}, (err) => {
            if (err) return next (err);
            if(event.messages.length > 1 && event.messages.length % 10 === 0) {
                let users = [];
                event.qrf.forEach((q) =>{
                    users.push(q['oneSignal'].id);
                })

                let message = {
                    app_id: process.env.oneSignalID,
                    contents: {"en" : "Go there now"},
                    headings: {'en' : "There's some chatter within your QRF Team"},
                    include_player_ids: users,
                    data: {"type": "qrfChat", "page": "QRFPage", "id": `${event._id}`}
                }
                sendNotification(message);
            }
        })
    })
}
