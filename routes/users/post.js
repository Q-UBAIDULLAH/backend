import User from "../../model/user/index.js"

const postuser=(req,res)=>{
    const user= new User(req.body)
    user.save()
console.log("req",req.body)
res.send({status:200})
}


export default postuser