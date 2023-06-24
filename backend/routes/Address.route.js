
const express = require("express")
const jwt = require("jsonwebtoken")
const { AddressModel } = require("../model/Address.model")

const addressroute = express.Router()


addressroute.post("/add",async(req,res)=>{
    const token = req.headers.authorization

  try{
    if(token){
        const decode = jwt.verify(token,"batman")

         if(decode){
             const newAddress = new AddressModel(req.body)
             await newAddress.save()
             const address = await AddressModel.find({"userID":decode.userID})
             res.status(200).send({"msg":"new address is added","data":address})
  
           }
         }
  }catch(err){
    res.status(400).send({"msg":err.message})

  }

})

addressroute.get("/get",async(req,res)=>{
     const token = req.headers.authorization
     try{
         
        if(token){
            const decode = jwt.verify(token,"batman")

             if(decode){
                const address = await AddressModel.find({"userID":decode.userID})
                res.status(200).send({"msg":address})
             }else{
                res.status(400).send({"msg":"login token is wrong"})
             }
        }else{
            res.status(400).send({"msg":"please login first"})
        }

     }catch(err){
        res.status(400).send({"msg":err.message})
     }

})

addressroute.delete("/delete/:id",async(req,res)=>{
         const {id} = req.params
    try{
           await AddressModel.findByIdAndDelete({_id:id})
           res.status(200).send({"msg":"address is deleted"})

    }catch(err){
        res.status(400).send({"msg":err.message})

    }
})

addressroute.patch("/update/:id",async(req,res)=>{
    const {id} = req.params
try{
      await AddressModel.findByIdAndUpdate({_id:id},req.body)
      res.status(200).send({"msg":"address is updated"})

}catch(err){
   res.status(400).send({"msg":err.message})

}
})

module.exports={
    addressroute
}