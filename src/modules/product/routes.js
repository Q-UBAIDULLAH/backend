import { Router } from "express";
import get from "./controller/get.js";
 import post from './controller/post.js'
import deletecontroller from "./controller/delete.js";
import updatecontroller from "./controller/update.js";

const router=Router()


router.get('/',get)
router.post('/',post)
router.delete('/:id',deletecontroller)
router.put('/:id',updatecontroller)

export default router