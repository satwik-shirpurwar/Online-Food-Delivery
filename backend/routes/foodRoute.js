import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();

// --- Image Storage Engine Configuration ---
// This configures multer to handle file uploads.
const storage = multer.diskStorage({
    /**
     * The destination for uploaded files.
     * On Vercel's read-only filesystem, you can only write to the '/tmp' directory.
     * This is the key change to fix the error.
     */
    destination: '/tmp',

    /**
     * Defines the filename for the uploaded file.
     * We use Date.now() to ensure each filename is unique.
     */
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

// Initialize multer with the storage configuration.
const upload = multer({ storage: storage });


// --- API Routes ---
// GET route to list all food items.
foodRouter.get("/list", listFood);

// POST route to add a new food item, using the 'upload' middleware for the image.
foodRouter.post("/add", upload.single('image'), addFood);

// POST route to remove a food item.
foodRouter.post("/remove", removeFood);


export default foodRouter;
