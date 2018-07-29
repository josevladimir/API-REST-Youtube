const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: [
            'Tech', 'Home', 'Kids'
        ]
    },
    stock:{
        type: Number,
        default: 10 
    },
    fecha_publicacion: {
        type: Date,
        default: Date.now()
    }
});

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;