//generation of the token

require("dotenv").config();

const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) =>{
    return jwt.sign({id}, process.env.TOKEN_kEY, 
      

    );
};