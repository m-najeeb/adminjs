import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    product: { type: String },
    price: { type: Number },
    type: {
        type: String,
        enum: ['Electronics', 'Non-Electronics'],
        default: 'Electronics',
    }
});

const ProductSchema = mongoose.model("Product", productSchema);
export { ProductSchema };
