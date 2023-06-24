
const mongoose = require("mongoose")

const schema = mongoose.Schema({

    "Title": String,
    "arr":[String],
    "Image": String,
    "Name": String,
    "Sprice": String,
    "price": Number,
    "category":String,
    "status":Boolean,
    "gender":String
 

},{
    versionKey:false
})

const Womenmodel = mongoose.model("womendata",schema)

const Allmodel = mongoose.model("Alldata",schema)

//const Menmodel = mongoose.model("mendata",schema)




module.exports={
    Womenmodel ,Allmodel
}