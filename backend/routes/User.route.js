
const express = require("express")
const userroute = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { Usermodel } = require("../model/User.model")



userroute.post("/register",async(req,res)=>{

const {name,email,password} = req.body
let count = 0
  
console.log(req.body)
try{
const user = await Usermodel.find({email})
if(user.length!=0){
    count++
}

 if(email.includes("@")==true ){

  if(/[A-Z]/.test(password) ){
   if(/[a-z]/.test(password) ){
    if(/[0-9]/.test(password)){
       if(/[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(password)){  
        if(password.length>=8 && password.length<=16){
         if(count==0){
          bcrypt.hash(password,5,async(err,hash)=>{
             if(hash){
               const user = new Usermodel({name,email,password:hash})
               await user.save()
               res.status(200).send({"msg":"user is registered"})
              }else if (err){
                 res.status(200).send({"msg":err})
                 }
             })
         }else{
           res.status(200).send({"msg":"user is already register"})
         }

         }else{
            res.status(400).send({"msg":" Your password length should have between 8 to 16 digits "}) 
         
          } 
          
             }else{
                res.status(400).send({"msg":"your password contain atleast one special character "}) 
        
             }
 
         } else{
            res.status(400).send({"msg":"your password contain atleast one number "}) 
         
        } 
   
      } else{
        res.status(400).send({"msg":"your password contain atleast one small letter "}) 
  
      } 

 }else{

    res.status(400).send({"msg":"your password should contain atleast one captical letter "}) 
 }

}else{
    res.status(400).send({"msg":"not valid email syntax"})
}

}catch(err){
    res.status(400).send({"msg":err})
 }

})


userroute.get("/get",async(req,res)=>{
try{
    const users = await Usermodel.find()
    res.status(200).send({"msg":users})

}catch(err){
    res.status(400).send({"msg":err.message})

}
})

userroute.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params
    try{
        await Usermodel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":"user is removed"})
    
    }catch(err){
        res.status(400).send({"msg":err.message})
    
    }
    })
    
 userroute.post("/login",async(req,res)=>{
    const{email,name,password} = req.body

    try{
        const user = await Usermodel.find({email})
        bcrypt.compare(password,user[0].password,async(err,result)=>{
          
            if(result){
                res.status(200).send({"msg":`Welcome.. ${user[0].name} you are logged In `,"name":user[0].name, "token": jwt.sign({"userID":user[0]._id}, "batman") })
            }else{
                res.status(400).send({"msg":err.message})
            }
           
        })
    }
    catch(err){
        res.status(400).send({"msg":err})
    }

 })


module.exports={
    userroute
}