const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required:[true, "Your email is required"],
        unique:true,
    },
    username:{
        type:String,
        required:[true, "Your username is required"],
    },
    password:{
        type:String,
        required:[true, "Your password is required"],
    },
    createdAt:{
        type:Date,
        default: new Date(),
    },
});
// Middleware to hash the password before saving the user
userSchema.pre("save", async function () {
        this.password = await bcrypt.hash(this.password, 12); // Hash the password before saving
    
});

module.exports = mongoose.model("User", userSchema);