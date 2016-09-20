import * as express from 'express';
import * as mongoose from 'mongoose';
import { QRF, IQRFModel } from './model';
import { User, IUserModel} from '../Users/model';
import { sendNotification } from '../utils/push';

(mongoose as any).Promise = global.Promise;

export function getMine(req: express.Request, res: express.Response, next: Function) {
    let date = new Date();
    QRF.find({ $or: [{creator: req['payload']._id}, {qrf: req['payload']._id}], expirationDate: {$gte: date} })
    .populate ('creator', 'firstName lastName branch imgUrl')
    .populate ('qrf', 'firstName lastName branch imgUrl')
    .exec((err, events) => {
        if (err) return (err);
        res.json(events)
    });
}

export function create(req: express.Request, res: express.Response, next: Function) {
    QRF.create(req.body, (err, event) => {
        if (err) return next (err);
        res.json({message: "QRF on the way"});
    }).then((event) =>{
        let coords = event.location;
        let maxDist = 50 * 1.6;
        User.find({
            loc: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: coords
                    },
                    $maxDistance: maxDist * 1000
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
                contents: {"en" : "A veteran in your area has requested a QRF"},
                headings: {'en' : "BREAK BREAK BREAK"},
                include_player_ids: list,
                ios_sound: "file://audio/qrf.wav",
                android_sound:'file://audio/qrf.wav',
                data: {"type": "qrf", "page": "QRFPage", "id": `${event._id}`}
            }
            sendNotification(message);
        })
    })
}
