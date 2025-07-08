import User from "../../model/user/index.js"
const deleteuser=async(req,res)=>{
try{
//   console.log(req.params)
  const {id}=req.params
   await User.findByIdAndDelete(id)

   res.status(200).send({status:200,message:"user deleted successfully"})

}
catch(error){
res.status(500).send({status:500,error})
}
}       
export default deleteuser