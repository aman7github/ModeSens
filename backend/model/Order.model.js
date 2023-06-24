

const mongoose = require("mongoose")

const schema = mongoose.Schema({

    "Title": String,
    "Title_URL": String,
     "arr":[String],
    "Image": String,
    "Name": String,
    "Sprice": String,
    "price": Number,
    "prdstores": String,
    "category":String,
    "userID":String,
    "Size":String,
    "Quantity":Number,
    "Date":String,
    "gender":String,
    "status":Boolean,
    "Address":{
        "building":String,
        "city":String,
        "landmark":String,
        "mobile":Number,
         "name":String,
         "pincode":String,
         "street":String
    }
 

},{
    versionKey:false
})

const Ordermodel = mongoose.model("userorderdata",schema)

const WishListmodel = mongoose.model("usewishlistdata",schema)

const Cartmodel = mongoose.model("cartdata",schema)


module.exports={
Ordermodel,WishListmodel,Cartmodel
}