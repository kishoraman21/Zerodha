// const { model } = require("mongoose");

// const { PositionSchemas } = require("../schemas/PositionSchemas");


// const PositonsModel =  new model("position", PositionSchemas);


// module.exports = { PositonsModel };


// File: model/PositionsModel.js gpt code 
const { model } = require("mongoose");
const { PositionSchemas } = require("../schemas/PositionSchemas");

const PositionsModel =  new model("position", PositionSchemas); // ✅ no 'new'

module.exports = { PositionsModel };
