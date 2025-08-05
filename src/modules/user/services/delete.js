import { deleteById } from "../db/index.js"
const deletedata=(id)=>{

   return deleteById(id)
}
export default deletedata