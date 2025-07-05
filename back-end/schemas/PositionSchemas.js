const {Schema, model} = require("mongoose");


const PositionSchemas = new Schema({
    
     product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
})
// const PositionsModel =  new model("position", PositionSchemas);
// module.exports = { PositionsModel };
module.exports = {PositionSchemas};