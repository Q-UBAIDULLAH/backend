import express from "express"
import postuser from "./post.js"
import getuser from "./get.js"



const router=express.Router()

router.get('/',getuser)
router.post('/',postuser)


export default router