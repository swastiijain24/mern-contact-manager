const mongoose = require("mongoose");

//obj type schema we are defining the structure of the db 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    age: {
        type: Number,
    }
}, { timestamps: true }
)
    ;


//create model
const User = mongoose.model('User', userSchema)

module.exports = User;