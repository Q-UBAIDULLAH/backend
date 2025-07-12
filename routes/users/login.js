import User from "../../model/user/index.js"
import bcrypt from "bcrypt";
import "dotenv/config.js"
import jwt from "jsonwebtoken"

const loginuser=async(req,res)=>{
try{
    const {password,email}=req.body
// const user =await User.find({email}) find array lara he iswaja e ose password nh milra
const user =await User.findOne({email}) //obj layega
if(user){
 const checkPassword=bcrypt.compareSync(password, user.password)

 if(checkPassword){
    let token = jwt.sign({ email:user.email }, process.env.JWT_SECRET);

    res.status(200).send({status:200,user,message:"Login successfully",token})
 }
 else{
    res.status(401).send({status:401,message:"Incorrect password"})
 }
}
else{
    res.status(404).send({status:404,message:"user not found"})
}
}

catch(error){
    console.log(error)
res.status(404).send({status:404,error})
}
}
export default loginuser