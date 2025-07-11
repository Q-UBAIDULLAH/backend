import User from "../../model/user/index.js"
import bcrypt from "bcrypt";
const postuser=(req,res)=>{
    const password = bcrypt.hashSync(req.body.password, 10);
    const user= new User({...req.body,password})
    user.save()
console.log("req",req.body)

res.send({status:200})
}


export default postuser