import mongoose from "mongoose";

const userschema= new mongoose.Schema({

    username:{
        type:mongoose.Schema.Types.String,
    },
    email:{
        type:mongoose.Schema.Types.String,
    },
    password:{
                type:mongoose.Schema.Types.String,
    }
})

const User=mongoose.model('user',userschema) //model ka schema bna liya he or model be create krliya he

export default User