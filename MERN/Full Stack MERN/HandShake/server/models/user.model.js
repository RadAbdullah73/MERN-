const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name:{type : String,
	required: [
		true,
		"Title is required"
	],
	minlength : [3 ,"name must be at least 3 characters long"]

},
},{timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User;