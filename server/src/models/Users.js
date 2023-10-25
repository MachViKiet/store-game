const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        name: {type: String, require: true},
        email: {type: String, require:true, unique: true},
        password: {type: String, require: true},
        isAdmin: {type: Boolean, default: false, require: true},
        phone: {type: String, require: true},
        access_token: {type: String, require: true},
        refresh_token: {type: String, require: true},
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("Users", userSchema);
module.exports = User;