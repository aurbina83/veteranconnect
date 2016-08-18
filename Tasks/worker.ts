import * as express from 'express';
import { Event, IEventModel } from '../Events/model';
import { Comment, ICommentModel} from '../Comments/model';
import { User, IUserModel } from '../Users/model';
import * as mongoose from 'mongoose';
import { welcome, eventCreatorNotify, eventAttendeeNotify } from '../utils/mailHelper';

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
      let later = new Date(date.getTime() + (13 * 60 * 60 * 1000));
      Event.find({
          "dateTime": {$gte: now, $lt: later}
      })
        .populate('eventCreator', 'firstName email', User)
        .populate('attending', 'firstName email', User)
        .exec((err, events)=>{
          if (err) return err;
          if(events.length === 0) return;
          events.forEach((e)=>{
              let mailOptions = {
                  from: 'Veteran Connect <info@veteranconnect.co>',
                  to: e.eventCreator['email'],
                  subject: 'Your event is coming up soon!',
                  html: "welcome(user)"
              };
              transporter.sendMail(mailOptions, (err) =>{
                  if (err) return err;
                  e.attending.forEach((a)=>{
                      let mailOptions = {
                          from: 'Veteran Connect <info@veteranconnect.co>',
                          to: a['email'],
                          subject: "You've got an event coming up soon!",
                          html: eventAttendeeNotify(a, event)
                      };
                      transporter.sendMail(mailOptions, (err) => {
                          if (err) console.log(err);
                          return;
                      })
                  })
              })
          })
      }).then(function(){
          mongoose.connection.close();
      })
  });
