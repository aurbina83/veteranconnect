import * as express from 'express';
import { Event, IEventModel } from '../Events/model';
import { Comment, ICommentModel} from '../Comments/model';
import { User, IUserModel } from '../Users/model';
import * as mongoose from 'mongoose';
import * as moment from 'moment';
import { transporter, eventCreatorComment, eventAttendeeComment, eventDeleted } from '../utils/mailHelper';
import { sendNotification } from '../utils/push';

/**
 * Global Promise for mongoose
 */
(mongoose as any).Promise = global.Promise;

export let commentNotify = function(event) {
    Event.findOne({ _id: event._id })
        .populate("eventCreator", "firstName email oneSignal", User)
        .populate("attending", "firstName email oneSignal", User)
        .exec((err, event) => {
            if (err) console.log(err);
            let users = [];
            let time = event.dateTime.toISOString();
            time = moment(time).format("dddd, MMMM Do, h:mm a");
            event.attending.forEach((a)=>{
                users.push(a['oneSignal'].id);
            })
            users.push(event.eventCreator['oneSignal'].id)
            let message = {
                app_id: process.env.oneSignalID,
                contents: {"en" : `@${event.name} on ${time}`},
                headings: {'en' : "New comments in an event you're in!"},
                include_player_ids: users,
                data: {"type": "comments", "page": "CommentPage", "id": `${event._id}`}
            }
            sendNotification(message);

            // let mailOptions = {
            //     from: 'Veteran Connect <info@veteranconnect.co>',
            //     to: event.eventCreator['email'],
            //     subject: 'One of your events is getting some attention!',
            //     html: eventCreatorComment(event.eventCreator, event)
            // };
            // transporter.sendMail(mailOptions, (err) => {
            //     if (err) console.log(err);
            //     event.attending.forEach((a) => {
            //         let mailOptions = {
            //             from: 'Veteran Connect <info@veteranconnect.co>',
            //             to: a['email'],
            //             subject: "An event you're attending is getting some attention!",
            //             html: eventAttendeeComment(a, event)
            //         };
            //         transporter.sendMail(mailOptions, (err) => {
            //             if (err) console.log(err);
            //             return;
            //         })
            //     })
            // })
        })
}

export let deleteNotify = function(date, attending, name){
        if (attending == null) return;
        let attend = attending;
        let users = [];
        let n = name;
        let mailed = 0;
        let time = date.toISOString();
        time = moment(time).format("dddd, MMMM Do, h:mm a");
        attend.forEach((a) => {
            users.push(a['oneSignal'].id);
        })
        let message = {
            app_id: process.env.oneSignalID,
            contents: {"en" : `@${name} on ${time}`},
            headings: {'en' : "An event you were in has been cancelled"},
            include_player_ids: users,
            ios_sound: "a10notification.wav",
            android_sound:'a10notification.wav',
            data: {"type": "deleted"}
        }
        sendNotification(message);
        // attend.forEach((a)=>{
        //     let mailOptions = {
        //         from: 'Veteran Connect <info@veteranconnect.co>',
        //         to: a['email'],
        //         subject: "An event you were in was deleted.",
        //         html: eventDeleted(a, n, time)
        //     };
        //     transporter.sendMail(mailOptions, (err) => {
        //         if (err) console.log(err);
        //         mailed++;
        //     })
        // })
}
