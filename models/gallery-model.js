const mongoose = require('mongoose')

const gallerySchmea = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true,
    },
    likes: {
        type: Array,
        required: true,
    },
    imageUrl: {
        type: String,
        requierd: true,
    }
},
    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
)

const Gallery = mongoose.model("Gallery", gallerySchmea);

module.exports = Gallery;