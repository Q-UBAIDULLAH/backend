import User from "../../model/user/index.js"
import bcrypt from "bcrypt";
import 'dotenv/config.js'
const postuser=(req,res)=>{
try{
const password = bcrypt.hashSync(req.body.password, 10);
    const user= new User({...req.body,password})
        let token = jwt.sign({ email:user.email }, process.env.JWT_SECRET);
    
    user.save()
console.log("req",req.body)

res.status(201).send({statu:201,user,token})
}

    catch(error){
        res.status(500).send({statu:500,error})
    }
}


export default postuser