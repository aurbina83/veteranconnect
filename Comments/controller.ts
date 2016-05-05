import * as express from 'express';
import * as mongoose from 'mongoose';
import { ICommentModel } from './model';
import { IEventModel } from '../Events/model';

export function controller(Comment: mongoose.Model<ICommentModel>, Event: mongoose.Model<IEventModel>) {
    return {
        create: create
    }

    function create(req: express.Request, res: express.Response, next: Function) {
        let c = new Comment(req.body);
        c.datePosted = Date.now();
        c.user = req['payload']._id;
        c.save((err, comment) => {
            if (err) return next(err);
            Event.update({ _id: c.event }, { $push: { 'comments': c._id } }, (err, result) => {
                if (err) return next(err);
                res.json(c);
            });
        });
    }
}
