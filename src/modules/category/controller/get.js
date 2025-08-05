import getData from "../services/get.js"
const get=async(req,res)=>{


try {
  const users=await getData()
    res.status(200).send({status:200,data:users})
} 
catch (error) {
    res.status(500).send({status:500,message:"Internal server Error"})
}
}

export default get