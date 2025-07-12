import "dotenv/config.js"
import jwt from "jsonwebtoken"
const tokenverification=(req,res,next)=>{
    if(req.headers?.authorization){
 
  const token=req.headers.authorization.split(" ")[1]
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
console.log("decoded",decoded) //agr verify hogya tw pora objct ajaega jo hmne save kraya tha
  console.log("token",token)
  next()
    }
    else{
      res.status(500).send({status:500,message:"Token not provided"})
    }
  

}
export default tokenverification


// fetch("url",{
//    headers:{
//         "Authrization":"Bearer token"
//     }
// })