
const express = require("express")
const userroute = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { Usermodel } = require("../model/User.model")



// userroute.post("/register",async(req,res)=>{

// const {name,email,password} = req.body
// let count = 0
  
// console.log(req.body)
// try{
// const user = await Usermodel.find({email})
// if(user.length!=0){
//     count++
// }

//  if(email.includes("@")==true ){

//   if(/[A-Z]/.test(password) ){
//    if(/[a-z]/.test(password) ){
//     if(/[0-9]/.test(password)){
//        if(/[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(password)){  
//         if(password.length>=8 && password.length<=16){
//          if(count==0){
//           bcrypt.hash(password,5,async(err,hash)=>{
//              if(hash){
//                const user = new Usermodel({name,email,password:hash})
//                await user.save()
//                res.status(200).send({"msg":"user is registered"})
//               }else if (err){
//                  res.status(200).send({"msg":err})
//                  }
//              })
//          }else{
//            res.status(200).send({"msg":"user is already register"})
//          }

//          }else{
//             res.status(400).send({"msg":" Your password length should have between 8 to 16 digits "}) 
         
//           } 
          
//              }else{
//                 res.status(400).send({"msg":"your password contain atleast one special character "}) 
        
//              }
 
//          } else{
//             res.status(400).send({"msg":"your password contain atleast one number "}) 
         
//         } 
   
//       } else{
//         res.status(400).send({"msg":"your password contain atleast one small letter "}) 
  
//       } 

//  }else{

//     res.status(400).send({"msg":"your password should contain atleast one captical letter "}) 
//  }

// }else{
//     res.status(400).send({"msg":"not valid email syntax"})
// }

// }catch(err){
//     res.status(400).send({"msg":err})
//  }

// })


userroute.post("/register", async (req, res) => {
    let { name, email, password } = req.body;
    
    // Trim email and password to avoid extra spaces
    email = email?.trim();
    password = password?.trim();
    
    try {
      const existingUser = await Usermodel.findOne({ email });
  
      if (!email || !password) {
        return res.status(400).send({ msg: "Email and Password both are required." });
      }
  
      if (!emailRegex.test(email)) {
        return res.status(400).send({ msg: "Invalid email format." });
      }
  
      if (existingUser) {
        return res.status(400).send({ msg: "User already registered with this email." });
      }
  
      // Password validations
      if (!/[A-Z]/.test(password)) {
        return res.status(400).send({ msg: "Password must contain at least one uppercase letter." });
      }
  
      if (!/[a-z]/.test(password)) {
        return res.status(400).send({ msg: "Password must contain at least one lowercase letter." });
      }
  
      if (!/[0-9]/.test(password)) {
        return res.status(400).send({ msg: "Password must contain at least one number." });
      }
  
      if (!/[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/.test(password)) {
        return res.status(400).send({ msg: "Password must contain at least one special character." });
      }
  
      if (password.length < 8 || password.length > 16) {
        return res.status(400).send({ msg: "Password length must be between 8 and 16 characters." });
      }
  
      // All validations passed ✅
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          return res.status(500).send({ msg: "Error while encrypting password." });
        }
        const newUser = new Usermodel({ name, email, password: hash });
        await newUser.save();
        return res.status(201).send({ msg: "User registered successfully." });
      });
  
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  });









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
    
//  userroute.post("/login",async(req,res)=>{
//     const{email,name,password} = req.body

   
//     if(email=="" || password==''){
//         res.status(400).send({"msg":"email and password field must be filled"})
//     }else{
//     try{
     
//         const user = await Usermodel.find({email})
//         bcrypt.compare(password,user[0].password,async(err,result)=>{
          
//             if(result){
//                 res.status(200).send({"msg":`Welcome.. ${user[0].name} you are logged In `,"name":user[0].name, "token": jwt.sign({"userID":user[0]._id}, "batman") })
//             }else{
//                 res.status(400).send({"msg":"ui"})
//             }
           
//         })
//     }
//     catch(err){
//         res.status(400).send({"msg":"Not a registered user. Signup first!"})
//     }

//     }

//  } )


userroute.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    if (email == "" || password == "") {
      res.status(400).send({ "msg": "Email and Password fields must be filled." });
    } else {
      try {
        const user = await Usermodel.find({ email });
  
        if (user.length === 0) {
          res.status(400).send({ "msg": "User not found. Please register first!" });
        } else {
          bcrypt.compare(password, user[0].password, async (err, result) => {
            if (result) {
              const token = jwt.sign({ userID: user[0]._id }, "batman", { expiresIn: "7d" });
  
              res.status(200).send({
                "msg": `Welcome.. ${user[0].name}, you are logged in.`,
                "name": user[0].name,
                "token": token
              });
            } else {
              res.status(400).send({ "msg": "Incorrect password. Please try again." });
            }
          });
        }
  
      } catch (err) {
        res.status(400).send({ "msg": "Something went wrong. Try again later!" });
      }
    }
  });

module.exports={
    userroute
}