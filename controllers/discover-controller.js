const CategoryModel = require("../models/category-model");
const GalleryModel = require("../models/gallery-model");

const like = async (req, res, next) => {
    try {
        const imageId = req.params.imageId;
        if (!imageId) {
            res.status(400).send("Bad Request");
        }
        let likeValue;
        const imgDetails = await GalleryModel.find({ _id: imageId });
        if (imgDetails) {
            if (imgDetails.likes) {
                likeValue = 0;
            }
            else {
                likeValue = 1;
            }
        }
        await GalleryModel.updateOne(
            { _id: imageId },
            { $set: { likes: likeValue } }
        );
        res.send("Favourites updated");
    } catch (error) {
        console.log(e);
        next(e);
    }
}

const shuffle = async (req, res, next) => {
    try {
        const category = req.params.category;
        const shuffle = req.params.shuffle;
        const sortByDate = req.params.sortByDate;
        const filterByLike = req.params.filterByLike;

        if (!category) {
            res.status(400).send("Bad Request");
        }

        let sort = 1;
        let skip = parseInt(shuffle) || 0;
        if (sortByDate) {
            if (sortByDate == "asc") {
                sort = 1;
            }
            else if (sortByDate == "desc") {
                sort = -1;
            }
        }

        let filter = {};
        if (filterByLike) {
            filter = { like: 1 };
        }

        const galleryDetails = await GalleryModel.find({
            category: { $in: [category] },
            ...filter,
        })
            .sort({ createdAt: sort })
            .skip(skip)
            .limit(4);

        res.json(galleryDetails);
    } catch (e) {
        console.log(e);
        next(e);
    }
};

module.exports = { shuffle, like };