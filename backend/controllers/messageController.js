import { conversation } from "../models/conversation.js";
import {Message} from "../models/message.js"
// import req.id from "../middleware/isAithenticaated.js";

export const sendmessage = async (req,res)=>{
    try{
        const senderid = req.id;
        const reciverid = req.params.id ;
        const  {message} = req.body
        // console.log(senderid)
        // console.log(reciverid)
        // console.log(message)

        let gotconversation = await conversation.findOne({
            participants:{$all : [senderid ,reciverid]}
        })

        if(!gotconversation){
            gotconversation =  await conversation.create({
                participants: [senderid , reciverid]
            })
        }; 
console.log(message)
        const newmessage = await Message.create({
            senderid,
            reciverid,
            message
        });  


        if(newmessage){
            gotconversation.messages.push(newmessage._id)
        };
        await gotconversation.save();




        /// socket.io - start here //
        return res.status(200).json({message: "message sent"})
    }catch(error){
        console.log(error)
    }
}

export const getmessage = async(req,res)=>{
    try{

        const reciverid = req.params.id;
        const senderid = req.id
        const Conversation = await conversation.findOne({
            participants:{$all : [senderid ,reciverid]}

        }).populate("messages")
        
        // console.log(conversation.messages)
        return res.status(200).json(Conversation?.messages);

    }catch(err){
        console.log(err)
    }
}