//load models
const User = require("../models/user");
const Post = require("../models/post");
const Comment = require("../models/comment");
const Category = require("../models/categories");

let baseHeader = "/public/images/headers/header.jpg";

/* POSTS */

exports.all_posts = async (req, res, next) => {
	let amount = 24,
		offset = 0,
		posts;

	if (req.query.amount) amount = parseInt(req.query.amount);

	if (req.query.offset) offset = parseInt(req.query.offset);

	posts = await Post.find({})
		.sort({
			createdAt: "-1",
		})
		.populate("user categories", "name _id")

		.skip(offset)
		.limit(amount);
	res.status(200).json({
		posts,
	});
};

exports.new_post = async (req, res, next) => {
	let { title, body, categories, imageUrl, allowComments } = req.body,
		user = await User.findById(req.user.id),
		errors = [],
		catNone;

	imageUrl ? imageUrl : (imageUrl = baseHeader);

	catNone = await Category.findOne({
		name: "none",
	});

	if (!catNone) {
		let newCat = new Category({
			name: "none",
		});
		catNone = await newCat.save();
	}

	if (!categories || categories.length <= 0) {
		categories = String(catNone._id);
	}

	if (!title || !body) {
		errors.push({
			msg: "Please enter all fields",
		});
	}

	if (body.length < 150) {
		errors.push({
			msg: "Please make your body atleast a 150 characters",
		});
	}

	if (errors.length > 0) {
		return res.status(417).json({
			errors,
			title,
			body,
			categories,
		});
	}
	const newPost = new Post({
		title,
		body,
		user,
		categories,
		allowComments,

		image: imageUrl,
	});

	await newPost.save();

	let post = await Post.findById(newPost._id)
		.populate("user", "name _id")
		.populate("categories");

	res.status(201).json({
		post,
	});
};

exports.my_posts = async (req, res, next) => {
	let amount = 0,
		offset = 0,
		posts;

	if (req.query.amount) amount = parseInt(req.query.amount);

	if (req.query.offset) offset = parseInt(req.query.offset);

	posts = await Post.find({
		user: req.user,
	})
		.skip(offset)
		.limit(amount)
		.populate("user", "name _id")
		.populate("categories");

	res.status(200).json({
		posts,
	});
};

exports.post_by_id = async (req, res, next) => {
	let id = req.params.id,
		post,
		comments;

	post = await Post.findById(id)
		.populate("user", "name socials")
		.populate("categories");

	if (!post)
		return res.status(404).json({
			msg: "Post not found",
		});

	comments = await Comment.find({
		post: id,
	}).populate("user", "name");

	res.status(200).json({
		comments,
		post,
	});
};

exports.edit_post = async (req, res, next) => {
	let { title, body, categories, imageUrl, allowComments } = req.body,
		errors = [],
		id = req.params.post_id,
		catNone;

	imageUrl ? imageUrl : (imageUrl = baseHeader);

	catNone = await Category.findOne({
		name: "none",
	});

	if (!catNone) {
		let newCat = new Category({
			name: "none",
		});
		catNone = await newCat.save();
	}

	if (!categories || categories.length <= 0) {
		categories = String(catNone._id);
	}

	if (!title || !body) {
		errors.push({
			msg: "Please enter all fields",
		});
	}

	if (body.length < 150) {
		errors.push({
			msg: "Please make your body atleast a 150 characters",
		});
	}

	if (errors.length > 0) {
		return res.status(417).json({
			errors,
			post: {
				title,
				body,
				categories,
				_id: id,
			},
		});
	}
	await Post.findByIdAndUpdate(id, {
		title,
		body,
		categories,
		image: imageUrl,

		allowComments,
	});

	let post = await Post.findById(id)
		.populate("user", "name _id")
		.populate("categories");
	res.status(200).json({
		post,
	});
};

exports.delete_post = async (req, res, next) => {
	const post_id = req.params.post_id;
	await Post.findByIdAndRemove(post_id);

	res.status(204).json({
		msg: "Deleted post",
	});
};

/*  COMMENTS  */

exports.new_comment = async (req, res, next) => {
	let post_id = req.params.post_id,
		{ body } = req.body,
		post,
		newComment;

	post = await Post.findOne({
		_id: post_id,
	});

	if (!post)
		return res.status(404).json({
			error: "Post not found",
		});

	if (!post.allowComments)
		return res.status(404).json({
			error: "Post doesnt have comments enabled",
		});

	if (!body || body.length < 0)
		return res.status(417).json({
			error: "No body",
		});

	newComment = new Comment({
		body: body,
		user: req.user,
		post,
	});

	await newComment.save();

	let returnComment = await Comment.findById(newComment._id).populate("user", "name");
	res.status(201).json({
		returnComment,
		id: newComment._id,
	});
};

exports.edit_comment = async (req, res, next) => {
	const post_id = req.params.post_id,
		comment_id = req.params.comment_id,
		{ body } = req.body;

	await Comment.findByIdAndUpdate(comment_id, {
		body,
	}).catch(e => {
		console.log(e);
		return res.status(500).json({
			error: "An error occured",
		});
	});

	res.status(201).json({
		id: comment_id,
	});
};

exports.delete_comment = async (req, res, next) => {
	const post_id = req.params.post_id,
		comment_id = req.params.comment_id;

	await Comment.findByIdAndRemove(comment_id).catch(e => {
		console.log(e);
		return res.status(500).json({
			error: "An error occured",
		});
	});

	res.status(204).json({
		msg: "Deleted comment",
	});
};
