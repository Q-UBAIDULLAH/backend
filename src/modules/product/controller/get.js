import getData from "../services/get.js"
const get=async(req,res)=>{


try {
  const users=await getData(req.query)
    res.status(200).send({status:200,data:users})
} 
catch (error) {
  console.log(error)
    res.status(500).send({status:500,message:"Internal server Error"})
}
}

export default get