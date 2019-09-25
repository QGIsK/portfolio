const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

CategorySchema.pre("save", function(next) {  
  if(this.isModified("name")) {
    this.name = this.name.toLowerCase()
  }

  next();
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
