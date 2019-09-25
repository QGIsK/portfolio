const mongoose = require("mongoose");

Date.prototype.getWeek = function() {
	var onejan = new Date(this.getFullYear(), 0, 1);
	return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
};

let today = new Date(),
	weekNumber = today.getWeek();

const PostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	likes: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
	lastEdited: {
		type: Date,
		default: new Date(),
	},
	allowComments: {
		type: Boolean,
		default: false,
	},
	weekNumber: {
		type: Number,
		default: weekNumber,
	},
	comments: {
		type: mongoose.Schema.ObjectId,
		ref: "Comments",
	},
	image: {
		type: String,
		default: "",
	},
	user: {
		type: mongoose.Schema.ObjectId,
		ref: "User",
	},
	categories: [
		{
			type: mongoose.Schema.ObjectId,
			ref: "Category",
		},
	],
	featured: {
		type: Boolean,
		default: false,
	},
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
