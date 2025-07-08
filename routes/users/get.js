import User from "../../model/user/index.js"

const getuser=async(req,res)=>{

try{

const users=await User.find({
    // email:"osman@gmail.com", // more query be hen iski mongoose
    // username:"osman"
})

res.status(200).send({status:200,users})
    }
    catch( err){
res.status(500).send({status:500,error:err.message})
    }
}
export default getuser