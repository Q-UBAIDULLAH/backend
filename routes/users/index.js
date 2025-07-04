import express from "express"
import postuser from "./post.js"



const router=express.Router()

router.post('/',postuser)

export default router