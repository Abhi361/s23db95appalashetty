const mongoose = require("mongoose")
const eagleSchema = mongoose.Schema({
    name: String,
    age: Number,
    description: String
})
module.exports = mongoose.model("eagle",
    eagleSchema)