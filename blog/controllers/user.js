// load models
const User = require("../models/user");
const Post = require("../models/post");
const Comment = require("../models/comment");

// File upload handlers
const upload = require("../middleware/uploadImage");
const Resize = require("../middleware/resizeImage");

// dependencies
const validUrl = require("valid-url");

exports.my_profile_get = async (req, res, next) => {
	const user = await User.findById(req.user.id).select(
		"name email _id join_date about isAdmin isEditor socials avatar weekly_digest digest_categories last_updated"
	);

	if (!user) return res.status(404).json({ error: "No user found" });

	res.status(200).json({ user });
};

exports.my_profile_update = async (req, res, next) => {
	let findUser = await User.findById(req.user.id),
		{ user } = req.body;

	if (!findUser) return res.status(404).json({ error: "No user found" });

	if (!user) return res.status(412).json({ error: "Please provide user data" });

	let errors = [];

	if (!user.name) {
		errors.push({
			msg: "Please enter all fields",
		});
	} else {
		if (user.about.length < 0) {
			user.about = "We don't know anything about this user";
		}

		if (user.avatar.length < 0) {
			user.avatar = "/public/images/headers/header.jpg";
		}
	}

	if (errors.length > 0) {
		return res.status(417).json({
			errors,
			name,
			email,
		});
	}

	await User.findByIdAndUpdate(req.user.id, {
		about: user.about,
		avatar: user.avatar,
		name: user.name,
		socials: user.socials,
		weekly_digest: user.weekly_digest,
		digest_categories: user.digest_categories,
	});
	// let log = await User.findById(req.user.id);
	// console.log(log);
	return res.status(200).json({ msg: "Updated" });
};

exports.user_profile = async (req, res, next) => {
	let id = req.params.user_id,
		user;
	user = await User.findById(id).select("avatar _id name socials about email join_date isAdmin isEditor");

	if (!user) return res.status(404).json({ error: "User not found" });

	res.status(200).json({ user });
};

exports.user_profile_posts = async (req, res, next) => {
	let id = req.params.user_id,
		amount = 24,
		offset = 0,
		posts,
		user;

	if (req.query.amount) amount = parseInt(req.query.amount);

	if (req.query.offset) offset = parseInt(req.query.offset);

	user = await User.findById(id);

	if (!user) return res.status(404).json({ error: "User not found" });

	posts = await Post.find({ user })
		.skip(offset)
		.limit(amount)
		.sort({
			createdAt: "-1",
		})
		.populate("user categories", "avatar _id name");

	if (!posts) return res.status(404).json({ error: "This user doesn't have any posts" });

	res.json({ posts });
};
