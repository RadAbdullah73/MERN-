const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name:{type : String,
	required: [
		true,
		"name is required"
	],
	minlength : [2 ,"name must be at least 2 characters long"]

},
type:{type:String,
},
descreption:{type:String,
},
skills :{skill1:"" , skill2:"" , skill3:""} ,
like : {type:Number, default:0 ,
} ,

},{timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User;