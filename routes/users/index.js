import express from "express"
import postuser from "./post.js"
import getuser from "./get.js"
import deleteuser from "./delete.js"
import updateuser from "./update.js"



const router=express.Router()

router.get('/',getuser)
router.post('/',postuser)
router.delete('/:id',deleteuser)
router.put('/:id',updateuser)


export default router