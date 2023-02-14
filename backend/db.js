// const mongoose = require("mongoose");

// mongoose.set('strictQuery', false);

// const MONGOURL = "mongodb://localhost:27017/farmers_portal";
// // Define the database URL to connect to.

// // Wait for database to connect, logging an error if there is a problem 
// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect(MONGOURL);
// }

// const Schema = mongoose.Schema;

// var UserSchema = new Schema({
//     _id: { type: String },
//     email: { type: String, required: true, unique: true, lowercase: true, trim: true },
//     password: { type: String, required: true }
// });


// // Compile model from schema
// exports.User = mongoose.model("User", UserSchema);


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmers_portal', {useNewUrlParser: true});
var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;