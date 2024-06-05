import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from '../utils/generate.token.js';

export const login = async (req,res)=>{
    res.send("OK")
}

export const signup = async (req,res)=>{
    try {
        const { fullName, username, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword) return res.status(400).json({error: "password do not match"})
        const user = await User.findOne({ username})

        if(user) return res.status(400).json({ error: "User already Exists"})

        const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const saltRound = await bcryptjs.genSalt(10)
        const hashedPassowrd = await bcryptjs.hash(password,saltRound)

        const userCreate = new User({
            fullName,
            username,
            password : hashedPassowrd,
            gender,
            profilePic: gender.toString() === 'male' ? boyPic : girlPic
        })

        if(userCreate){
            generateTokenAndSetCookie(userCreate._id, res)
            await userCreate.save()

            res.status(201).json({
                _id: userCreate._id, 
                fullName: userCreate.fullName,
                username: userCreate.username,
                profilePic: userCreate.profilePic
                
            })
        }
        else{
            res.status(400).json({error: "Invalid User Data"})
        }

        

        


    } catch (error) {
        console.log("Error in- signup-controller: ",error.message)
        res.status(500).json({error: "Internal Server Error"})
        // throw new Error("Error in- signup-controller: ", error)
    }
    
    
}


export const logout = async (req,res)=>{
    res.send("OK")
}