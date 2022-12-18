const Jokes = require("../models/user.model");

module.exports.findAllUsers = (req, res) => {
  Jokes.find()
    .then(allDaJokes => res.json({ jokess: allDaJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
  if (req.params.id!='random'){
    Jokes.findOne({ _id: req.params.id })
      .then(oneSingleJokes => res.json({ Jokes: oneSingleJokes }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  }
  else{
	Jokes.findOne({ _id: req.params.id })
		.then(oneSingleJokes => res.json({ Jokes: oneSingleJokes }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
  }
};

module.exports.createNewUser = (req, res) => {
  Jokes.create(req.body)
    .then(newlyCreatedJokes => res.json({ user: newlyCreatedJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingUser = (req, res) => {
  Jokes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJokes => res.json({ jokes: updatedJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
  Jokes.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
