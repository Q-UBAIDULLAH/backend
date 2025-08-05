import mongoose, { Schema } from "mongoose";

const dataschema=new Schema({

name:{
    type:String,
    required:true
},
status:{
    type:String,
    required:true,
    enum:["active","inactive"],
    default:"active"
},
})

const Model=mongoose.model("category",dataschema)

export default Model