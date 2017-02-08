import * as express from 'express';
 const app = express();

 var server = require('http').Server(app);
 var io = require("socket.io").listen(server);



    io.on('connection', function(socket) {

        socket.on('join', function (data) {
            socket.join(data.event);
        })

        socket.on('message', function(data) {
            io.in(data.event).emit('receive', data);
        })

        socket.on('leave', function (data) {
            socket.leave(data.event);
        })

        socket.on('disconnect', function() {
            console.log('disconnected');
        })
    });

server.listen(80, function() {
    console.log("Listening on port %s...", server.address().port);
})
