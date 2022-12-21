const { validate } = require("../models/user.model");
const User = require("../models/user.model");

module.exports.index = (request, response) => {
  response.json({
     message: "Hello World"
  });}
  
module.exports.findAllUsers = (req, res) => {
  User.find()
    .then(allDaUsers => res.json( allDaUsers ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
	User.findOne({ _id: req.params.id })
		.then(oneSingleUser => res.json( oneSingleUser ))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
  User.create(req.body)
    .then(newlyCreatedUser => res.json(newlyCreatedUser ))
    .catch(err => res.status(400).json(err));
};

module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true } )
    .then(updatedUser =>{ res.json( updatedUser );console.log("hhhhhhhhhhhhhh")})
    .catch(err => res.status(400).json(err));
};

module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};



