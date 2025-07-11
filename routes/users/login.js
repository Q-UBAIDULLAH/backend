import User from "../../model/user/index.js"
import bcrypt from "bcrypt";

const loginuser=async(req,res)=>{
try{
    const {password,email}=req.body
// const user =await User.find({email}) find array lara he iswaja e ose password nh milra
const user =await User.findOne({email}) //obj layega
if(user){
 const checkPassword=bcrypt.compareSync(password, user.password)

 if(checkPassword){
    res.status(200).send({status:200,user,message:"Login successfully"})
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