import mongoose, { Schema } from "mongoose";

const dataschema=new Schema({

title:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
price:{
     type:Number,
    required:true
},
image:{
    type:String,
    required:true
},
category:{
    type:mongoose.Schema.ObjectId,
    ref:"category",
    required:true
}
})
 
const Model=mongoose.model("product",dataschema)

export default Model