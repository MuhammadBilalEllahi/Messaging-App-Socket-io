import User from "../models/user.model.js";

export const getUsersForSideBar= async (req,res)=>{

    try {
        
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password") // or should let message yourself. might be good but not for now

        res.status(200).json(filteredUsers)

    } catch (error) {
        console.log("Error in- GET USER SIDEBAR: ",error.message)
        res.status(500).json({error: "Internal Server Error"})
        
    }
}