// load models
const Category = require("../models/categories");

exports.category_all = async (req, res, next) => {
	Category.find({})
		.then(categories => {
			res.status(200).json({ categories });
		})
		.catch(e => console.log(e));
};

exports.category_new = async (req, res, next) => {
	let { name } = req.body,
		findCat,
		newCategory;
	if (!name)
		return res.status(417).json({
			error: "Please provide a name",
		});

	findCat = await Category.findOne({ name });

	if (findCat) return res.status(409).json({ error: "Category already exists" });

	newCategory = new Category({
		name,
	});

	await newCategory.save();

	res.status(201).json({
		newCategory,
	});
};

exports.category_edit = async (req, res, next) => {
	let { name } = req.body,
		id = req.params.category_id;

	await Category.findById(id).then(category => {
		if (!category)
			return res.status(404).json({
				error: "category not found",
			});
	});

	await Category.findByIdAndUpdate(id, {
		name,
	});

	res.status(201).json({ msg: "Updated" });
};

exports.category_delete = async (req, res, next) => {
	const id = req.params.category_id;

	await Category.findById(id).then(category => {
		if (!category)
			return res.status(404).json({
				error: "category not found",
			});
	});

	await Category.findByIdAndDelete(id);

	res.status(204).json({
		msg: "Deleted",
	});
};
