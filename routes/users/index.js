import express from "express"
import postuser from "./post.js"
import getuser from "./get.js"
import deleteuser from "./delete.js"
import updateuser from "./update.js"
import loginuser from "./login.js"
import tokenverification from "../../config/tokenverification.js"


const router=express.Router()

router.get('/',tokenverification,getuser)
router.post('/',postuser)
router.delete('/:id',deleteuser)
router.put('/:id',updateuser)
router.post('/login',loginuser) //ye sb api bnai he hmne

export default router