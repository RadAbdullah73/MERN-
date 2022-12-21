const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name:{type : String,
	required: [
		true,
		"name is required"
	],
	minlength : [2 ,"name must be at least 2 characters long"]

},
position:{type:String,
},
status :{game1:Number , game2:Number , game3:Number},

},{timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User;