import * as express from 'express';
import { Event, IEventModel } from '../Events/model';
import { Comment, ICommentModel} from '../Comments/model';
import { User, IUserModel } from '../Users/model';
import * as mongoose from 'mongoose';
import * as moment from 'moment';
import { eventNotify } from '../utils/mailHelper';
import { sendNotification } from '../utils/push';

require('dotenv').config({ silent: true });
let nodemailer = require('nodemailer');
let ses = require('nodemailer-ses-transport');

/**
 * Global Promise for mongoose
 */
(mongoose as any).Promise = global.Promise;

let transporter = nodemailer.createTransport(ses({
    accessKeyId: process.env.AMAZON_SES_KEY,
    secretAccessKey: process.env.AMAZON_SES_SECRET
}));

    let mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/vc';
    mongoose.connect(mongoUrl, (err) => {
      if (err) console.error(err);
      else console.log('Connected to ' + mongoUrl);
      let date = new Date();
      let now = new Date(date.getTime() + (12 * 60 * 60 * 1000));
      let later = new Date(now.getTime() + (11 * 60 * 1000));
      Event.find({
          "dateTime": {$gte: now, $lt: later}
      })
        .populate('eventCreator', 'firstName email oneSignal', User)
        .populate('attending', 'firstName email oneSignal', User)
        .exec((err, events)=>{
          if (err) return err;
          if(events.length === 0) return;
          events.forEach((e)=>{
            var time = e.dateTime.toISOString();
            var users = [];
            time = moment(time).format("dddd, MMMM Do, h:mm a");
            //   let mailOptions = {
            //       from: 'Veteran Connect <info@veteranconnect.co>',
            //       to: e.eventCreator['email'],
            //       subject: 'Your event is coming up soon!',
            //       html: eventNotify(e.eventCreator, e, time)
            //   };
              users.push(e.eventCreator['oneSignal'].id);
              e.attending.forEach((a) => {
                  users.push(a['oneSignal'].id);
              });
              let message = {
                  app_id: process.env.oneSignalID,
                  contents: {"en" : `@${e.name} on ${time}`},
                  headings: {'en' : "You have an event coming up"},
                  include_player_ids: users,
                  data: {"type": "event", "page": "EventDetailsPage", "id": e._id}
              }
              sendNotification(message);
            //   transporter.sendMail(mailOptions, (err) =>{
            //       if (err) return err;
            //       e.attending.forEach((a)=>{
            //           let mailOptions = {
            //               from: 'Veteran Connect <info@veteranconnect.co>',
            //               to: a['email'],
            //               subject: "You've got an event coming up soon!",
            //               html: eventNotify(a, e, time)
            //           };
            //           transporter.sendMail(mailOptions, (err) => {
            //               if (err) console.log(err);
            //               return;
            //           })
            //       })
            //   })
          })
      })
      .then(function(){
          mongoose.connection.close();
      })
  });
