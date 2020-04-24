const path = require('path');
const http = require('http');
const express = require('express');
const publicPath = path.join(__dirname,'../public');


const socketIO = require('socket.io');
var app = express();
var server = http.createServer(app);
const port = process.env.PORT||3000;
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection',function(socket){
	console.log('New user connected');
	socket.on('disconnect',()=>{
		console.log('user disconnected');
	});
});
server.listen(port,function(){
	console.log('server started on ' +port+' port');
});