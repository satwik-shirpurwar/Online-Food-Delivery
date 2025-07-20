import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';
import path from 'path'; // 👈 Import the 'path' module

const foodRouter = express.Router();

// Image Storage Engine
// This now saves the image to a temporary directory on Vercel's server.
const storage = multer.diskStorage({
    destination: '/tmp', // ✅ Corrected: Use the temporary writable directory
    filename: (req, file, cb) => {
        // ✨ Improved: Use path.extname to safely get the file extension
        return cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

foodRouter.get("/list", listFood);
foodRouter.post("/add", upload.single('image'), addFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;