import mongoose, { Schema } from "mongoose";

const dataschema=new Schema({

    name:{
        type:String,
        required:true
    },
    email:{
          type:String,
        required:true
    },
    password:{
          type:String,
        required:true
    }
})

const User=mongoose.model("user",dataschema)

export default User