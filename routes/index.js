import express from "express"
import user from "./users/index.js"




const router=express.Router()

router.use('/user',user)

// router.use('/post',user)
// router.use('/comment',user) ho sakhta ye be end points

export default router