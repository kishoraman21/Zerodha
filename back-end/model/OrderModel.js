const {model} = require("mongoose");

const {OrderSchemas} = require("../schemas/OrderSchemas");

const OrderModel = new model("order", OrderSchemas);

module.exports = {OrderModel};