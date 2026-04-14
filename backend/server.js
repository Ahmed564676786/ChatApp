const express = require('express');
const http  = require('http');
const socketio = require('socket.io');

const port = 3000;
const app = express();

const server = http.createServer(app);

const io = socketio(server,{

    cors:{

        origin:["*"],
        methods:["GET","POST"],
        credentials:true
    }
});


// calling routes 

app.use('/api',)

app.use('/',(req,res,next)=>{

    console.log('Hello from the server');
    res.send('Home Page')
});


io.on('connection',(socket) =>{

    console.log('User is connected',socket.id);
    
});


app.listen(port,()=>{


    console.log('server is running');
})