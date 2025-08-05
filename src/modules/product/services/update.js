import { updateById } from "../db/index.js"
const updateData=(id,data)=>{

   return updateById(id,data)
}
export default updateData