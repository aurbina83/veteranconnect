import * as express from 'express';
import { IEventModel } from './model';
import {ICommentModel} from '../Comments/model';
import {IUserModel } from '../Users/model';
import * as mongoose from 'mongoose';

export function controller(Event: mongoose.Model<IEventModel>, User: mongoose.Model<IUserModel>, Comment: mongoose.Model<ICommentModel>) {
    return {
        getAll: getAll,
        findOne: findOne,
        findMine: findMine,
        findAttending: findAttending,
        create: create,
        update: update,
        attending: attending,
        notAttending: notAttending,
        remove: remove
    }

    function getAll(req: express.Request, res: express.Response, next: Function){
        //Get max distance from user preference
        let maxDist = req.query.maxDist;
        let date = Date.now();

        //Get Coordinates [lng, ltd]
        let coords = [];
        coords[0] = req.query.lng;
        coords[1] = req.query.lat;

        //Find Locations
        Event.find({
            "dateTime": {$gte: new Date(date)},
            "loc": {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: coords
                    },
                    //Meters to KM
                    $maxDistance: maxDist * 1000
                }
            }
        })
        .populate('eventCreator', 'firstName lastName branch branchImg imgUrl')
        .populate('attending', 'firstName lastName imgUrl branch')
        .exec((err, data) => {
            if (err) return next(err);
            res.json(200, data);
        });
    }

    function findOne(req: express.Request, res: express.Response, next: Function){
        Event.findOne({_id: req.params.id})
        .populate('comments', '-event')
        .populate('eventCreator', 'firstName lastName branch branchImg imgUrl')
        .populate('attending', 'firstName lastName imgUrl branch')
        .exec((err, data) => {
            if(err) return next(err);
            if(!data) return next({message: 'Oops'});
            Comment.populate(data.comments, {path: 'user', select:'firstName lastName imgUrl branchImg', model: 'User'}, (err, response) => {
                if (err) return next(err);
                res.json(data);
            });
          });
      }

    function findMine(req: express.Request, res: express.Response, next: Function){
        let date = Date.now();
        Event.find({eventCreator: req['payload']._id, dateTime: {$gte: new Date(date)} })
        .populate('eventCreator', 'firstName lastName imgUrl')
        .exec((err, data) => {
            if(err) return next(err);
            res.json(data);
        });
    }

    function findAttending(req: express.Request, res: express.Response, next: Function){
        let date = Date.now();
        Event.find({attending: req['payload']._id, dateTime: {$lte: new Date(date)} })
        .populate('eventCreator', 'firstName lastName branch')
        .exec((err, data) => {
            if(err) return next(err);
            if(!data) return next ({message: "This event was deleted!"});
            res.json(data);
        });
    }

    function create(req: express.Request, res: express.Response, next: Function){
        req.body.datePosted = Date.now();
        let e = new Event(req.body);
        e.eventCreator = req['payload']._id;
        e.save((err, event: IEventModel) => {
            if(err) return next(err);
            User.update({_id: req['payload']._id}, {$push: {'events': e._id}}, (err, result) =>{
                if(err) return next (err);
                res.json(event);
            })
        });
    }

    function update(req: express.Request, res: express.Response, next: Function){
        Event.update({_id: req.params.id, eventCreator: req['payload']._id}, req.body, (err, numRows: any) => {
            if (err) return next (err);
            if(numRows.nModified ===0) return next({ message: "Could not update the requested event", status: 500});
            res.json({ message: 'Your event has been updated!'});
        });
    }

    function attending(req: express.Request, res: express.Response, next: Function){
        Event.update({_id: req.params.id}, {$push: {'attending': req['payload']._id }, $inc: {numGuests: -1}}, (err)=> {
            if (err) return next (err)
            res.json({message: "You're In!"});
        });
    }

    function notAttending(req: express.Request, res: express.Response, next: Function){
        Event.update({_id: req.params.id}, {$pull: {'attending': req['payload']._id }, $inc: {numGuests: 1}}, (err)=> {
            if (err) return next (err)
            res.json({message: "You're Out!"});
            ///Comment.FindOneandRemove
        });
    }

    function remove(req: express.Request, res: express.Response, next: Function) {
      Event.findOneAndRemove({ _id: req.params.id, eventCreator: req['payload']._id }, (err, event) => {
        if (err) return next(err);
        if(event) {
            Comment.remove({event: req.params.id}, (err)=>{
                if(err) return next (err);
                User.update({_id: req['payload']._id}, {$pull: {'events': req.params.id}}, (err)=>{
                    if(err) return next (err);
                    res.json({message: "Event Deleted"});
                })
            })
        }
        else {
            next({message: 'Unable to delete item', status: 500});
        }
      });
  }




}
