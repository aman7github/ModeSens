
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    "name":String,
    "mobile":Number,
    "pincode":Number,
    "city":String,
    "building":String,
    "street":String,
    "landmark":String,
    "userID":String
},{
    versionKey:false
})

const AddressModel = mongoose.model("userAddress",schema)


module.exports={
    AddressModel
}