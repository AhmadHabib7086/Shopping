const express = require('express')
const mongoose = require('mongoose')
const User = require("./models/userModel")
const userRouter = require("./router/userRouter")
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
dotenv.config();



const app = express()
app.use(cors())
app.use(cookieParser())
app.use(express.json());

const Port= 3000

 const  mongoDB = mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
    console.log("conntect");
    
 })
 .catch((err)=>{
    console.log("error" , err);
    
 })


 app.use("/user" , userRouter)


app.listen(Port , ()=>{
    console.log(`Server is listen ${Port}`);
    
})

