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
        })

        socket.on('message', function(data) {
            io.in(data.room).emit('receive', data.message);
        })

        socket.on('leave', function (data) {
            socket.leave(data.room);
        })
    });
    return router;
}
