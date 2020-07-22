const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone:{
        type:Number,
        required: true,
    },
    
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },

});

module.exports = User = mongoose.model("user", UserSchema);
