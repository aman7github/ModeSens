
const express = require("express")
const { WishListmodel } = require("../model/Order.model")
const wishapp = express.Router()
const jwt = require("jsonwebtoken")

wishapp.post("/add",async(req,res)=>{
    const token = req.headers.authorization
try{
    if(token){
        const decode =  jwt.verify(token,"batman")
        if(decode){
            const women = new WishListmodel(req.body)
            await women.save()
            //await WishListmodel.insertMany(req.body)
            const data = await WishListmodel.find({"userID":decode.userID})
            res.status(200).send({"msg":"Item is added to WihsList","data":data})
        }
        }else{
            res.status(400).send({"msg":"login first"})
        }
}catch(err){
    res.status(400).send({"msg":"Item is already added to WishList"})
}

})


wishapp.get("/get",async(req,res)=>{
    const token = req.headers.authorization
try{
    if(token){
       const decode =  jwt.verify(token,"batman")
       if(decode){
            const data = await WishListmodel.find({"userID":decode.userID})
             res.status(200).send({"msg":data})

       }
    }
}catch(err){
    res.status(400).send({"msg":err.message})
}

})


wishapp.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params
    const token = req.headers.authorization
try{
    if(token){
        const decode =  jwt.verify(token,"batman")
        if(decode){
          //await WishListmodel.deleteMany()  // if you want delete all data at once
            await WishListmodel.findByIdAndDelete({_id:id})
            const data = await WishListmodel.find({"userID":decode.userID})
            res.status(200).send({"msg":"data is deleted","data":data})

        }
    }else{
        res.status(400).send({"msg":"login first"}) 
    } 
}catch(err){
    res.status(400).send({"msg":err.message}) 
}
})



module.exports={
    wishapp
}