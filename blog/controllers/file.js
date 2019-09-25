const path = require("path");
const aws = require("aws-sdk");
const uuidv4 = require("uuid/v4");

const config = require("../../config/");

const Resize = require("../middleware/resizeImage");

let baseUrl = "/public/images/";
let imagePath = path.join(__dirname, "../public/images/");

let fileUpload;
let fileName;
let type;

let cdn = !process.env.NODE_ENV || process.env.NODE_ENV === "development" ? false : true;

const spacesEndpoint = new aws.Endpoint(config.spaces_end_point);
const s3 = new aws.S3({
	endpoint: spacesEndpoint,
	accessKeyId: config.spaces_access_key,
	secretAccessKey: config.spaces_secret_key,
});

exports.upload = async (req, res, next) => {
	if (cdn) {
		let params = {
			Bucket: config.spaces_bucket,
			Key: `${uuidv4()}${path.extname(req.file.originalname)}`,
			Body: req.file.buffer,
			ACL: "public-read",
		};

		s3.putObject(params, function(err, data) {
			if (err) console.log(err, err.stack);
			else console.log(data);
		});
		fileName = params.Key;
		baseUrl = "https://blog-app.ams3.digitaloceanspaces.com/";
		type = "";
	} else {
		fileUpload = new Resize(imagePath);
		fileName = await fileUpload.save(req.file.buffer);
	}

	res.status(201).json({ path: `${baseUrl}${fileName}` });
};
