const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
	setup: {type:String,minlength:[10,"setup must be at least 10"]},
	punchine: {type:String,minlength:[3,"punchine must be at least 10"]}
	
},{ timestamps: true });

const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = Jokes;