import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobilenumber: {
        type: Number,  
        require: true
    },
    password: {
        type:String
    }
})
const User = new mongoose.model("User", userSchema)
export default User;