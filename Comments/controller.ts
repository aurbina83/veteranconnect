import * as express from 'express';
import * as mongoose from 'mongoose';
import { ICommentModel } from './model';
import { IEventModel } from '../Events/model';
import { commentNotify } from '../utils/notify';

export function controller(Comment: mongoose.Model<ICommentModel>, Event: mongoose.Model<IEventModel>) {
    return {
        create: create
    }

    function create(req: express.Request, res: express.Response, next: Function) {
        let c = new Comment(req.body);
        c.datePosted = new Date();
        c.user = req['payload']._id;
        c.save((err, comment) => {
            if (err) return next(err);
            Event.findOneAndUpdate({ _id: c.event }, { $push: { 'comments': c._id } }, (err, event) => {
                if (err) return next(err);
                if(event.comments.length > 1 && event.comments.length % 10 === 0 && event.attending.length < 15 && event.attending.length > 0) {
                    commentNotify(event);
                }
                res.json(c);
            });
        })
    }
}
