

const express = require("express")
const { Allmodel } = require("../model/Women.model")
const allapp = express.Router()

allapp.post("/add",async(req,res)=>{

try{

//  const data = new Allmodel(req.body)      // to add one data at a time
//  await data.save()
 await Allmodel.insertMany(req.body)         // to add more than one data 
 res.status(200).send({"msg":"new  data is added"})


}catch(err){
    res.status(400).send({"msg":err.message})
}
})


allapp.get("/get",async(req,res)=>{
  
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

  console.log(category,brand)



try{

    const totaldata = await Allmodel.find({$and:[customcategory,custombrand]})
    const data = await Allmodel.find({$and:[customcategory,custombrand]}).sort(customsort).skip((page-1)*12).limit(12)
  
  res.status(200).send({"msg":data,"totalItems":totaldata.length})

}catch(err){
    res.status(400).send({"msg":err.message})
}

})




allapp.get("/get/:id",async(req,res)=>{
    const {id} = req.params

try{
    const data = await Allmodel.findById({_id:id})
    res.status(200).send({"msg":data})
}catch(err){
    res.status(400).send({"msg":err.message})
}

})


 
allapp.patch("/update/:id",async(req,res)=>{
   const {id} = req.params
 
   try{
         await Allmodel.findByIdAndUpdate({_id:id},req.body) 
         res.status(200).send({"msg":"data updated"})

   }catch(err){
         res.status(400).send({"msg":err})
   }



})

allapp.delete("/delete",async(req,res)=>{
 
    try{
      await Allmodel.deleteMany()  // if you want delete all data at once
     res.status(200).send({"msg":"all data is deleted"})
    }catch(err){
        res.status(400).send({"msg":err.message}) 
    }
    })


allapp.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params
try{
 await Allmodel.findByIdAndDelete({_id:id})
 res.status(200).send({"msg":"data is deleted"})
}catch(err){
    res.status(400).send({"msg":err.message}) 
}
})





module.exports={
    allapp
}