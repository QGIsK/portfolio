// models/user

//dependencies
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	isEditor: {
		type: Boolean,
		default: false,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	avatar: {
		type: String,
	},
	join_date: {
		type: Date,
		default: Date.now,
	},
	weekly_digest: {
		type: Boolean,
		default: false,
	},
	digest_categories: [
		{
			type: mongoose.Schema.ObjectId,
			ref: "Category",
		},
	],
	about: {
		type: String,
		default: "We don't know anything about this user",
	},
	socials: {
		website: {
			href: {
				type: String,
				default: "",
			},
			name: {
				type: String,
				default: "Website",
			},
		},
		instagram: {
			href: {
				type: String,
				default: "",
			},
			name: {
				type: String,
				default: "Instagram",
			},
		},
		twitter: {
			href: {
				type: String,
				default: "",
			},
			name: {
				type: String,
				default: "Twitter",
			},
		},
		github: {
			href: {
				type: String,
				default: "",
			},
			name: {
				type: String,
				default: "Github",
			},
		},
		spotify: {
			href: {
				type: String,
				default: "",
			},
			name: {
				type: String,
				default: "Spotify",
			},
		},
		telegram: {
			href: {
				type: String,
				default: "",
			},
			name: {
				type: String,
				default: "Telegram",
			},
		},
	},
	last_updated: {
		name: {
			updated: {
				type: Boolean,
				default: false,
			},
			date: {
				type: Date,
				default: Date.now,
			},
		},
		admin: {
			updated: {
				type: Boolean,
				default: false,
			},
			date: {
				type: Date,
				default: Date.now,
			},
		},
		email: {
			updated: {
				type: Boolean,
				default: false,
			},
			date: {
				type: Date,
				default: Date.now,
			},
		},
		password: {
			updated: {
				type: Boolean,
				default: false,
			},
			date: {
				type: Date,
				default: Date.now,
			},
		},
	},
});
UserSchema.pre("update", function(next) {
	let user = this;

	if (user.isModified("name")) {
		user.last_updated.name = {
			updated: true,
			date: new Date(),
		};
	}

	if (user.isModified("admin")) {
		user.last_updated.admin = {
			updated: true,
			date: new Date(),
		};
	}

	if (user.isModified("email")) {
		user.last_updated.email = {
			updated: true,
			date: new Date(),
		};
	}

	if (user.isModified("password")) {
		user.last_updated.password = {
			updated: true,
			date: new Date(),
		};
	}

	next();
});

UserSchema.pre("save", function(next) {
	let user = this;

	if (user.isModified("email")) {
		user.email = user.email.toLowerCase();
	}

	if (user.isModified("password")) {
		user.password = bcrypt.hashSync(user.password, 10);
	}

	next();
});

UserSchema.methods.comparePassword = function(plaintext, callback) {
	return bcrypt.compareSync(plaintext, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
