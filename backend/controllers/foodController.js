import foodModel from "../models/foodModel.js";
import { cloudinary } from "../config/cloudinary.js";

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching food list" });
    }
};

const addFood = async (req, res) => {
    try {
        if (!req.file) {
            return res.json({ success: false, message: "No image file uploaded" });
        }
        const imageUrl = req.file.path;
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: imageUrl,
        });
        await food.save();
        res.json({ success: true, message: "Food Added Successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding food" });
    }
};

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        if (!food) {
            return res.json({ success: false, message: "Food item not found" });
        }
        const imageUrl = food.image;
        const urlParts = imageUrl.split('/');
        const publicIdWithFolder = urlParts.slice(urlParts.indexOf('food-delivery-app-assets')).join('/');
        const publicId = publicIdWithFolder.substring(0, publicIdWithFolder.lastIndexOf('.'));
        if (publicId) {
            await cloudinary.uploader.destroy(publicId);
        }
        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed Successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error removing food" });
    }
};

export { listFood, addFood, removeFood };
