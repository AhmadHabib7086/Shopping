const User = require("../models/userModel");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.registerUser = async (req , res)=>{
    try {
        const {fullName , email , password} =req.body
   if(!fullName || !email || !password ){
    return res.status(400).json({message : "All feilds are require"})
   }
   //check exists 
   const UserExist = await User.findOne({email});
   if(UserExist){
    return res.status(400).json({message : "User already Exist"})

   }

   //hashpassword
   const hashedPassword = await bcrypt.hash(password , 10)

   const user = await User.create({
    fullName,
    password : hashedPassword,
    email
   })
    
   //generate token
 const token =  jwt.sign({
    _id:user._id
   },process.env.JWT_SECRET, {expiresIn : "7d"})

   res.status(200).json({
    _id :user._id,
    fullName:user.fullName,
    email : user.email,
    token

   })
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}



exports.Login= async (req , res)=>{
    try {
        const {email , password}=req.body
         //check feild
        if(!email || !password){
            return res.status(400).json({message : "All feilds are require"})
        }
        
        //find user
        const user = await User.findOne({email })
        if(!user){
            return res.status(400).json({message : "Invaild email or password"})
        }
        //  if(user){
        //     return res.status(400).json({message : "Login "})
        // }
        
        //compare password
        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(400).json({message:"password galat hai "})
        }
        // if(isMatch){
        //     return res.status(400).json({message:"password galat hai bhe "})
        // }


        //genetate token
        const token = jwt.sign(
            {_id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        )

        res.status(200).json({
            message:"login sucessfully",
            _id:user._id,
            password:user.password,
            email:user.email,
            token
        })
        
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}



exports.logoutUser = (req, res) => {
  try {

    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),   // immediately expire
    });

    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Logout failed",
    });
  }
};