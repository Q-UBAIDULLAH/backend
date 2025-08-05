import User from "../models/index.js";

const getall=async()=>await User.find()
 
const addData=(data)=>new User(data).save().then((user)=>user.toObject())

const deleteById=async(id)=>await User.findByIdAndDelete(id)

const updateById= async (id,data)=> await User.findByIdAndUpdate(id,data)

export {
getall,
addData,
deleteById,
updateById
} 