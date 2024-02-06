const CategoryModel = require("../models/category-model");
const GalleryModel = require("../models/gallery-model");

const category = async (req, res, next) => {
    try {
        const categoryName = req.params.categoryName;
        if (!categoryName) {
            throw new Error("Category name is required");
        }
        const newCategoryData = { name: categoryName };
        await CategoryModel.create(newCategoryData);
        res.send('Category created successfully');
    } catch (error) {
        console.log(e);
        next(e);
    }
}

const post = async (req, res, next) => {
    try {
        const name = req.body.name;
        const category = req.body.category;
        const imageUrl = req.body.imageUrl;
        if (!name || !category.length || !imageUrl) {
            res.status(400).send("Bad Request");
        }
        const newGalleryData = {
            name: name,
            category: category,
            imageUrl: imageUrl
        }

        await GalleryModel.create(newGalleryData);
        res.send('Image added successfully');
    } catch (error) {
        console.log(e);
        next(e);
    }
}

module.exports = { category, post }