const { model } = require("mongoose");

const { HoldingSchemas } = require("../schemas/HoldingSchemas");

const HoldingsModel = new model("holding", HoldingSchemas);

module.exports = { HoldingsModel };
