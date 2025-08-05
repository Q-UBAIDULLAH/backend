import postData from "../services/post.js"
const post=async(req,res)=>{

try {
    const data=await postData(req.body)
    res.status(200).send({status:200,data})
} catch (error) {
    res.status(500).send({status:500,Message:"internal server error"})
    console.log(error)
}

}


export default post