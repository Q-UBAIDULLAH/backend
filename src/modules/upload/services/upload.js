// import { upload } from "../db/index.js"
import { v2 as cloudinary } from 'cloudinary'
import { ENV } from '../../../constant/index.js';
import fsExtra from 'fs-extra';
// import sharp from 'sharp';


cloudinary.config({ 
  cloud_name: `${ENV.CLOUD_NAME}`, 
  api_key: `${ENV.API_KEY}`, 
  api_secret: `${ENV.SECRET_KEY}`
});

const uploadfile=async(file)=>{
// console.log("file",file.filename)
return new Promise((resolve,reject)=>{

// fsExtra.readFile(`src/modules/upload/files/${file.filename}`, (err, file) => {
//     console.log("err, files",err,file)
  

// sharp(`src/modules/upload/files/${file.filename}`)
// //   .resize({ width: 800 }) // 📐 Resize to width 800px (optional)
//   .jpeg({ quality: 50 })  // 🗜️ Compress JPEG to 70% quality
//   .toFile(`src/modules/upload/files/compressed-${file.filename}`)
//   .then((info) => {
//     console.log(" Image compressed successfully!",info);
//   })
//   .catch(err => {
//     console.error(" Compression error:", err);
//   });

    cloudinary.uploader
  .upload(`src/modules/upload/files/${file.filename}`,{folder:"store images"})
  .then(result=>console.log("result",fsExtra.removeSync(`src/modules/upload/files/${file.filename}`),resolve(result)))
  .catch((error)=>reject(error))

// });
    

})



    // return await upload(data)
}


export default uploadfile