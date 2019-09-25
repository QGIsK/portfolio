const jwt = require("jsonwebtoken");
const config = require("../../config/");

const User = require("../models/user");
const Post = require("../models/post");
const Comment = require("../models/comment");

module.exports = {
	checkAuth: async function(req, res, next) {
		let token =
			req.headers["x-access-token"] ||
			req.headers["authorization"] ||
			req.query.bearer ||
			req.query.authorization;
		if (token) {
			if (token.startsWith("Bearer ")) {
				token = token.slice(7, token.length);
			}
			jwt.verify(token, config.jwtSecret, async (err, decoded) => {
				if (err) {
					console.log(err);
					return res.status(403).json({ error: "Token is expired" });
				}
				const user = await User.findById(decoded.id);
				req.user = user;
				next();
			});
		} else {
			next();
		}
	},
	ensureAuthenticated: async function(req, res, next) {
		let token =
			req.headers["x-access-token"] ||
			req.headers["authorization"] ||
			req.query.bearer ||
			req.query.authorization;
		if (token) {
			if (token.startsWith("Bearer ")) {
				token = token.slice(7, token.length);
			}
			jwt.verify(token, config.jwtSecret, async (err, decoded) => {
				if (err) {
					console.log(err);
					return res.status(403).json({ success: false, error: "Token is invalid" });
				}
				const user = await User.findById(decoded.id);
				req.user = user;
				next();
			});
		} else {
			return res.status(403).json({
				success: false,
				message: "Auth token is not supplied",
			});
		}
	},
	ensureCommentOwner: async function(req, res, next) {
		const comment_id = req.params.comment_id;
		const post_id = req.params.post_id;

		const find_comment = await Comment.findById(comment_id);

		if (!find_comment) return res.status(422).json({ success: false, error: "Comment doesn't exist" });
		if (!find_comment.user._id.equals(req.user.id))
			return res.status(422).json({ success: false, msg: "You don't own this comment" });

		next();
	},
	ensurePostOwner: async function(req, res, next) {
		const post_id = req.params.post_id;
		const post = await Post.findById(post_id).populate("user");

		if (!post) return res.status(422).json({ success: false, error: "Post doesn't exist" });

		if (!post.user.equals(req.user.id) || !req.user.isAdmin)
			return res.status(422).json({ success: false, msg: "You don't own this post." });

		next();
	},

	ensureEditor: async function(req, res, next) {
		const user = await User.findById(req.user._id);

		if (!user.isEditor)
			return res.status(403).json({ success: false, error: "You don't have permissions to access this" });

		next();
	},

	ensureAdmin: async function(req, res, next) {
		const user = await User.findById(req.user._id);
		if (!user.isAdmin)
			return res.status(403).json({ success: false, error: "You don't have permissions to access this" });

		next();
	},
};
