import uploadfile from "../services/upload.js"


const uploadcontroller=async(req,res)=>{

try {
         console.log("Req-file",req.file)
          const file= await uploadfile(req.file)
    res.status(200).send({status:200,url:file.url})
} catch (error) {
console.log(error)
    res.status(500).send({status:500,Message:"internal uploader error"})

}

}


export default uploadcontroller