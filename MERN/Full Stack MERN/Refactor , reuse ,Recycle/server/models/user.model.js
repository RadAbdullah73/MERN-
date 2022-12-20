const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	title:{type : String},
	descreption:{type : String},
	price: {type : Number},

},{timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User;