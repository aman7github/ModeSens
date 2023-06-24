const mongoose = require("mongoose")

const schema = mongoose.Schema({

 "name":String,
 "email":String,
 "password":String,


},{
    versionkey:false
})


const Usermodel = mongoose.model("userlist",schema)

module.exports={
    Usermodel
}