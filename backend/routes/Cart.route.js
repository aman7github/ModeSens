
const express = require("express")
const { Cartmodel } = require("../model/Order.model")
const cartapp = express.Router()
const jwt = require("jsonwebtoken")

cartapp.post("/add",async(req,res)=>{
    const token = req.headers.authorization
try{

    if(token){
        const decode = jwt.verify(token,"batman")
        if(decode){
            const women = new Cartmodel(req.body)
            await women.save()
            const data = await Cartmodel.find({"userID":decode.userID}) 
             //await Cartmodel.insertMany(req.body)
            res.status(200).send({"msg":"Item is added to Cart","data":data})

        }
    }else{
        res.status(400).send({"msg":"login first"})
    }

}catch(err){
    res.status(400).send({"msg":"Item is already added to Cart"})
}

})


cartapp.get("/get",async(req,res)=>{
    const token = req.headers.authorization
  
try{
    if(token){
        const decode = jwt.verify(token,"batman")

        if(decode){
            const data = await Cartmodel.find({"userID":decode.userID})
            res.status(200).send({"msg":data})
        }
    }
}catch(err){
    res.status(400).send({"msg":err.message})
}

})


cartapp.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params
    const token = req.headers.authorization
try{
    if(token){
        const decode = jwt.verify(token,"batman")
        if(decode){
           //await Cartmodel.deleteMany()  // if you want delete all data at once
           await Cartmodel.findByIdAndDelete({_id:id})
           const data = await Cartmodel.find({"userID":decode.userID})
           res.status(200).send({"msg":"data is deleted",'data':data})

        }
    }else{
        res.status(400).send({"msg":"login first"}) 
    }
}catch(err){
    res.status(400).send({"msg":err.message}) 
}
})

cartapp.delete("/delete",async(req,res)=>{
    const token = req.headers.authorization
try{
    if(token){
        const decode = jwt.verify(token,"batman")
        if(decode){
           await Cartmodel.deleteMany()  // if you want delete all data at once
           const data = await Cartmodel.find({"userID":decode.userID})
           res.status(200).send({"msg":"data is deleted",'data':data})

        }
    }else{
        res.status(400).send({"msg":"login first"}) 
    }
}catch(err){
    res.status(400).send({"msg":err.message}) 
}
})



module.exports={
    cartapp
}