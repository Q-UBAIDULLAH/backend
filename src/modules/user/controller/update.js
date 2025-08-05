import updateData from "../services/update.js"

const updatecontroller=async(req,res)=>{
    try {

        const {id}=req.params
        await updateData(id,req.body)
    
         res.status(200).send({status:200,message:"user updated successfully"})

        }
         catch (error) {
            console.log(error)
        res.status(500).send({status:500,message:"Internal code error"})
    }


}
export default updatecontroller