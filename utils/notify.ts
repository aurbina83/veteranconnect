import * as express from 'express';
import { Event, IEventModel } from '../Events/model';
import { Comment, ICommentModel} from '../Comments/model';
import { User, IUserModel } from '../Users/model';
import * as mongoose from 'mongoose';
import * as moment from 'moment';
import { transporter, eventCreatorComment, eventAttendeeComment, eventDeleted } from '../utils/mailHelper';

/**
 * Global Promise for mongoose
 */
(mongoose as any).Promise = global.Promise;

export let commentNotify = function(event) {
    Event.findOne({ _id: event._id })
        .populate("eventCreator", "firstName email", User)
        .populate("attending", "firstName email", User)
        .exec((err, event) => {
            if (err) console.log(err);
            let mailOptions = {
                from: 'Veteran Connect <info@veteranconnect.co>',
                to: event.eventCreator['email'],
                subject: 'One of your events is getting some attention!',
                html: eventCreatorComment(event.eventCreator, event)
            };
            transporter.sendMail(mailOptions, (err) => {
                if (err) console.log(err);
                event.attending.forEach((a) => {
                    let mailOptions = {
                        from: 'Veteran Connect <info@veteranconnect.co>',
                        to: a['email'],
                        subject: "An event you're attending is getting some attention!",
                        html: eventAttendeeComment(a, event)
                    };
                    transporter.sendMail(mailOptions, (err) => {
                        if (err) console.log(err);
                        return;
                    })
                })
            })
        })
}

export let deleteNotify = function(event){
    Event.findOne({_id: event._id})
    .populate("attending", "firstName email", User)
    .exec((err, event)=>{
        if (err) return err;
        let time = event.dateTime.toISOString();
        time = moment(time).format("dddd, MMMM Do, h:mm a");
        event.attending.forEach((a)=>{
            let mailOptions = {
                from: 'Veteran Connect <info@veteranconnect.co>',
                to: a['email'],
                subject: "An event you were in was deleted.",
                html: eventDeleted(a, event, time)
            };
            transporter.sendMail(mailOptions, (err) => {
                if (err) console.log(err);
                return;
            })
        })
    })
}
