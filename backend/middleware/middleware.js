
const express = require("express")
const jwt = require("jsonwebtoken")

const middleware=(req,res,next)=>{

const token= req.headers.authorization

if(token){
const decoded = jwt.verify(token,"batman")
 console.log(decoded)
  
 if(decoded){
    req.body.userID = decoded.userID
 }else{
    res.status(400).send({"msg":"key and token not decoded correctly"})
 }


}else{
    res.status(400).send({"msg":"token is not found"})
}

next()


}


module.exports={
    middleware
}