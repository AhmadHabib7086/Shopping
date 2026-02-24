const express = require('express');
const { registerUser, Login, logoutUser } = require('../controller/userController');
const router = express.Router();

router.post("/" , (req , res)=>{

    res.send("user create " ,)
})

router.post("/register" , registerUser)
router.post('/login' , Login)
router.post('/logout' , logoutUser)
module.exports = router;
