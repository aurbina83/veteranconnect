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
            console.log(data);
            socket.join(data.event);
        })

        socket.on('message', function(data) {
            console.log(data);
            io.in(data.event).emit('receive', data);
        })

        socket.on('leave', function (data) {
            socket.leave(data.event);
        })

        socket.on('disconnect', function() {
            console.log('disconnected');
        })
    });
    return router;
}
