const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
},
    {
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
    }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;