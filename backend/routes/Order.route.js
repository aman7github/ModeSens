

const express = require("express")
const { Ordermodel } = require("../model/Order.model")
const orderapp = express.Router()
const jwt = require("jsonwebtoken")

orderapp.post("/add",async(req,res)=>{
    const token = req.headers.authorization
try{
    if(token){
        const decoded = jwt.verify(token, "batman")
        console.log(decoded)
       if(decoded){
        if(req.body.length==1){

 // <--why I add and delete userID because if data buy direct then it dont have userID because singleproduct page open without login its means that product did not get userid on post so we are adding userid from backed 
 //BUT if single data comes from cart so userID already added to that product if we dont remove it will be duplicate key error-------->

             let postdata = req.body[0]
             delete postdata.userID
             postdata.userID = decoded.userID
             const newdata = new Ordermodel(postdata)
             await newdata.save()
            const data = await Ordermodel.find({"userID":decoded.userID})
            res.status(200).send({"msg":"new data is added","data":data})

        }else if(req.body.length>1){
            
            await Ordermodel.insertMany(req.body)
            const data = await Ordermodel.find({"userID":decoded.userID})
            res.status(200).send({"msg":"new data is added","data":data})
        }
        

       }}
}catch(err){
    res.status(400).send({"msg":err.message})
}
})


orderapp.get("/get",async(req,res)=>{
  
    const token = req.headers.authorization

try{
    if(token){
       const decoded = jwt.verify(token, "batman")
       console.log(decoded)
      if(decoded){
        const data = await Ordermodel.find({"userID":decoded.userID})
        res.status(200).send({"msg":data})
      }else{
        res.status(400).send({"msg":"token and key are not decoded"})
      }
    }else{
        res.status(400).send({"msg":"token not found please login first"})
    }
}catch(err){
    res.status(400).send({"msg":err.message})
}

})





module.exports={
    orderapp
}