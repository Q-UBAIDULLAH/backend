import User from "../../model/user/index.js"

const updateuser=async(req,res)=>{
    try{
        const {id}=req.params
        const ids=req.params.id
        console.log("ids",ids)
        console.log("request params",req.params)
await User.findByIdAndUpdate(id,req.body)
    res.status(200).send({status:200,message:"user updated"})
    }
    catch(error){
res.status(500).send({status:500,error})
    }
}
export default updateuser