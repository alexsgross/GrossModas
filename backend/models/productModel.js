import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        slug: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        brand: { type: String, requided: true },
        category: { type: String, requided: true },
        description: { type: String, requided: true },
        price: { type: Number, requided: true },
        countInStock: { type: Number, requided: true },
        rating: { type: Number, requided: true },
        numReviews: { type: Number, requided: true },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);
export default Product;