import express from 'express'

import dotenv from 'dotenv'
// const db = require('./config/db')
import bodyParser from 'body-parser'
import connectDB from './config/db.js'
import cookieparser from 'cookie-parser'

import userroute from './routes/userroute.js'
import messageroute from './routes/messageroute.js'
import cors from 'cors'
// const router = require('./routes/userroute')
import {app ,server} from "./socket/socket.js"
app.use(cookieparser());
dotenv.config({}) 



app.use(bodyParser.json())

app.use(express.urlencoded({extended:true}))
const corsOptions={
    origin:'http://localhost:3000',
    credentials:true ,
}
app.use(cors({
    origin:'http://localhost:3000',
    credentials: true
}))
  

const Port = 8000



// app.get('/', async (req,res)=>{
//     try{
//         const response = await testmodel.find()
//         res.status(200).json(response)
//     }catch(err){
//         console.log('internal server error')
//     }
    
// })

// app.post('/upload' , async(req,res)=>{
//     try{
//         const data = req.body 
//         const showdata =  new testmodel(data)
//         const response = await showdata.save()
     
//         res.status(200).json(response)

//     }catch(err){
//         res.status(400).send(err)
//         console.log('internal server error')
//     }
   


// })

// app.delete('/delete/:id' , async (req,res)=>{
//     const id = req.params.id

//     const deletedata = await testmodel.findByIdAndDelete(id)
//     res.status(200).json({message:"delted successfully"})
// })

// routes 


app.use("/api/v1/user" , userroute )
app.use("/api/v1/message" ,messageroute)
// http://localhost:3000/api/v1/user/register

server.listen(Port , ()=>{
    connectDB();
    console.log(`app is listening on :${Port}`)
})   