import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


export const sendMessage = async (req, res) => {
    try {
        const senderId = req.user._id;

        const { id: receiverId } = req.params;
        const { message } = req.body;


        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }


        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        // await conversation.save()
        // await newMessage.save()

        await Promise.all([conversation.save(), newMessage.save()]) //runs in parallel

        res.status(201).json(newMessage)

    } catch (error) {
        console.log("Error in- sendMessage-controller: ", error.message)
        res.status(500).json({ error: "Internal Server Error" })

    }


}


export const getMessages = async (req, res) => {
    try {
        console.log("req user in get messages: ", req.user)
        const { id: userToChat } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChat] }
        }).populate('messages');

        if (!conversation) return res.status(200).json([])

        //console.log(conversation)

        const messages = conversation.messages;
        res.status(200).json(messages)

    } catch (error) {
        console.log("Error in- GET Message-controller: ", error.message)
        res.status(500).json({ error: "Internal Server Error" })
    }
}