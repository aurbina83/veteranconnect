import * as express from 'express';
import { Event, IEventModel } from '../Events/model';
import { Comment, ICommentModel} from '../Comments/model';
import { User, IUserModel } from '../Users/model';
import * as mongoose from 'mongoose';

module.exports = function(io) {
    var app = require('express');
    var router = app.Router();

    io.on('connection', function(socket) {
        console.log("user connected");

        socket.on('join', function (data) {
            socket.join(data.room);
            console.log(data.room);
        })

        socket.on('message', function(data) {
            let c = new Comment;
            c.message = data.message;
            c.event = data.room;
            c.datePosted = new Date();
            c.user = data.user;
            c.save((err, comment) =>{
                Event.findOneAndUpdate({ _id: c.event }, { $push: { 'comments': c._id }})
            })
            io.in(data.room).emit('receive', data.message);
        })

        socket.on('disconnect', function() {
            console.log('user disconnected');
        })
    });
    return router;
}
