import mongoose from "mongoose";
import "dotenv/config.js"



const url=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@qazicluster.uvdks6f.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=QaziCluster`

mongoose.connect(url)
export default mongoose