import { Router } from "express";
import uploadcontroller from "./controller/upload.js";
import multer from "multer"
import path from "path";
const router=Router()

// const __dirname=path.resolve()
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `src/modules/upload/files`)
  },
  filename: function (req, file, cb) {
   
    const uniqueId = Date.now() + '-' + Math.round(Math.random() * 1E9)  //multiple file ke liye uniqur rhe
    cb(null, `${uniqueId}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage })




router.post('/',upload.single('file'),uploadcontroller)

export default router