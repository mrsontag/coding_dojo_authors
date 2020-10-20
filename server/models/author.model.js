const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Author name is required"],
		minlength: [3, "Author name must be at least three characters."]
	}
}, {timestamps: true});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;