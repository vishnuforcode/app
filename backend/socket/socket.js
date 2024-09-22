import { Server } from "socket.io";

import http from 'http'
import express from "express";


const app = express() ;
const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET", "POST"],
        
    },
    transports: ['websocket' , 'polling'],
    path: "/socket.io/"
});

// app.listen(8000 ,()=>{
//     console.log("listenig on 8000");
    
// })

io.on('connection' ,(socket) => {
    console.log("user connected" , socket.id);
    
} )


export {app , io, server}