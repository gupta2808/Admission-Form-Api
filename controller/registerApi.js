const mongoose  = require('mongoose');
const express = require('express');
const router = express.Router();
const jwt  = require('jsonwebtoken');
var Register = mongoose.model("Register");

var bcrypt = require('bcryptjs');
router.post("/registerData",function(req,res){
    const register = new Register;
    register.fullName = req.body.fullName;
    register.email = req.body.email;
    register.mobileNumber = req.body.mobileNumber;
    register.password = bcrypt.hashSync(req.body.password);
    register.save().then(()=>{
        res.status(200).json({
            message : "USER REGISTERED SUCCESFULLY !"
        })
    }).catch((err)=>{
        console.log(err);
    })
})



router.post("/login",async function(req,res){
    try{
        const register = await Register.findOne({email : req.body.email})
        var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        register.password)
        if (!passwordIsValid) {
            return res.status(401).json({
              accessToken: null,
              message: "Invalid Password!"
            });
        }
        var token = jwt.sign(
            {   email : register.email ,
                _id : register._id,
                fullName : register.fullName
            }, "My_Secret", {
                expiresIn: 86400 // 24 hours
        });
        res.status(200).json({
            accessToken : token,
            register
        })
    }catch(error){
        res.status(400).json({
            message : error.message
            
        }) 
    }
})
module.exports = router;