 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;


var userSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    number: { type: String, required: true }
});

exports.User = mongoose.model("User", userSchema);