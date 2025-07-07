
import mongoose from "mongoose";

const userschema= new mongoose.Schema({

    username:{
        type:mongoose.Schema.Types.String,
    },
    email:{
        type:mongoose.Schema.Types.String,
        unique:true,
        required:true
    },
    password:{
                type:mongoose.Schema.Types.String,
    }
},
{
     timestamps: true 

}
)

const User=mongoose.model('user',userschema) //model ka schema bna liya he or model be create krliya he

export default User