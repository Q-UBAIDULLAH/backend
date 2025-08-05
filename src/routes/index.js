import { Router } from "express";
import userroutes from "../modules/user/routes.js"
import productroutes from '../modules/product/routes.js'
import uploadroutes from '../modules/upload/route.js'
import categoryroutes from '../modules/category/routes.js'
const router=Router()

router.use("/user",userroutes)
router.use("/product",productroutes)
router.use('/upload',uploadroutes)
router.use('/category',categoryroutes)
export default router