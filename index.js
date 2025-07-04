// import e from "express"
import express from "express"
import { userschema } from "./schema/index.js"
import user from './routes/index.js'
import mongoose from "./db/index.js"

const app=express()

mongoose.connection.on("open",()=>{
    console.log("Database Connected")
})

app.use(express.json()) // json formate


app.use("/api",user) // base endpoint api



// let users=[]


// app.get("/user",(req,res)=>{

//     res.send([{name:"hello world"},{class:"i"}])
// })
app.use('/',(req,res,next)=>{
    console.log("middlware",req)
    next()
})

app.get("/",(req,res)=>{

    res.send(new Date().toString())
})

// app.post("/user",async(req,res)=>{

//     try {
//        await userschema.validateAsync(req.body)
//         res.status(201).send({status:201,user:req.body,message:"user added successfullyt"})
//          users.push({...req.body, id:Date.now().toString(36)})
//          console.log("req",req.body)
//     }
//      catch (error) {
//         console.log(error)
//        res.status(400).send({error:error.details,status:400,message:"something went wrong"})
//     }

// })

// app.delete("/user/:id",(req,res)=>{
//     const {id}=req.params
//     console.log(id)
// // const index=users.findIndex(item=>item.id === Number(id))
// // users.splice(index,1)
// users=users.filter(item=>item.id !== id)
// res.send({message:"user deleted successfully"})


// })

// app.put("/user/:id",(req,res)=>{
// const {id}=req.params
// console.log(id)
// const index=users.findIndex(item=>item.id===id)
// console.log(index)
// users.splice(index,1,{...req.body,id})


// res.send({id,message:"user updated succssfully"} )
// })

// app.get("/user",(req,res)=>{
// res.send(users)
// })

app.listen(3000,()=>{
console.log("server is running on port 3000")
})

