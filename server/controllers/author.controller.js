const Author = require("../models/author.model");

module.exports.findAllAuthors = (req, res) => {
  Author.find().sort( "name" )
    .then(allDaAuthors => res.json(allDaAuthors ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleAuthor = (req, res) => {
	Author.findOne({ _id: req.params.id })
		.then(oneSingleAuthor => res.json(oneSingleAuthor ))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewAuthor = (req, res) => {
  Author.create(req.body)
    .then(newlyCreatedAuthor => res.json(newlyCreatedAuthor ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then(updatedAuthor => res.json(updatedAuthor))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then(result => res.json(result ))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
