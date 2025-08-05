import deletedata from "../services/delete.js"

const deletecontroller=async(req,res)=>{
    try {

        const {id}=req.params
        await deletedata(id)
         res.status(200).send({status:200,message:"user deleted successfully"})

        }
         catch (error) {
            console.log(error)
        res.status(500).send({status:500,message:"Internal code error"})
    }


}
export default deletecontroller