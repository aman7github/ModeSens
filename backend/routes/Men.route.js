
const express = require("express")
const { Menmodel } = require("../model/Mens.model")

const menapp = express.Router()

menapp.post("/add",async(req,res)=>{

try{

//  const women = new Menmodel(req.body)
//  await women.save()
 await Menmodel.insertMany(req.body)
 res.status(200).send({"msg":"new women data is added"})


}catch(err){
    res.status(400).send({"msg":err.message})
}
})


menapp.get("/get",async(req,res)=>{
  
    const category = req.query.category
    const sort = req.query.sort
    const order = req.query.order
    const brand = req.query.brand
    const page = req.query.page
    var customcategory;
  
if(category){
    customcategory={
      "category":category
     }
}else{
    customcategory={}
}


var customsort;
  if(sort==undefined){
     customsort={}
  }else if(sort=="price"){
    if(order=="asc"){
    customsort={
        "price":+1
    }
  }else if(order=="desc"){
    customsort={
        "price":-1
    }
  }
}

var custombrand;
 if(brand){
    custombrand={
        "Title":brand
    }
}else{
    custombrand={}
}

  console.log(sort,order,customsort,customcategory)

try{
 
    const data = await Menmodel.find({$and:[customcategory,custombrand]}).sort(customsort).skip((page-1)*12).limit(12)
    const totaldata = await Menmodel.find({$and:[customcategory,custombrand]})
    res.status(200).send({"msg":data,"totalItems":totaldata.length})

}catch(err){
    res.status(400).send({"msg":err.message})
}

})

menapp.get("/get/:id",async(req,res)=>{
    const {id} = req.params

try{
    const data = await Menmodel.findById({_id:id})
    res.status(200).send({"msg":data})
}catch(err){
    res.status(400).send({"msg":err.message})
}

})


menapp.patch("/update/:id",async(req,res)=>{
    const {id} = req.params
try{
 await Menmodel.findByIdAndUpdate({_id:id},req.body)
 const newdata = await Menmodel.find()
 res.status(200).send({"msg":"data updated", data:newdata})
}catch(err){
    res.status(400).send({"msg":err.message}) 
}
})

 // <------------------------------if you want delete all data at once----------------->

menapp.delete("/delete",async(req,res)=>{ 
try{
  await Menmodel.deleteMany() 
 res.status(200).send({"msg":"data is deleted"})
}catch(err){
    res.status(200).send({"msg":err.message}) 
}
})

 // <------------------------------if you want delete single data ----------------->

menapp.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params
try{
 await Menmodel.findByIdAndDelete({_id:id})
 res.status(200).send({"msg":"data is deleted"})
}catch(err){
    res.status(200).send({"msg":err.message}) 
}
})



module.exports={
   menapp
}