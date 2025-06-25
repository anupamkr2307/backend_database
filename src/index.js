//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({
    path:'./env'
})
connectDB() 






/*
import express from "express"
const app = express()

(  async () => {//async await try catch jarur lagaye jb bhi aap database se connect krna ho tb...
      try{
          await mongoose.connect (`${process.env.
          MONGODB_URI}/${DB_NAME}`)
          app.on("error",() => {
            console.log("ERRR:",error);
            throw error 
          })
          app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
          })

    }catch(error){
        console.error("ERROR:",error)
        throw err
    }
    
})()
*/