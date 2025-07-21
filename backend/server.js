import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

// Route Imports
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// --- App Configuration ---
const app = express();
const port = process.env.PORT || 4000;

// --- Middlewares ---
app.use(express.json());
app.use(cors());

// --- Database Connection ---
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected Successfully."))
    .catch((error) => console.log("DB Connection Error:", error));

// --- API Endpoints ---
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// --- Root Endpoint for testing ---
app.get("/", (req, res) => {
    res.send("Backend API is Running...");
});

// --- Start Server ---
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Export the app for Vercel
export default app;
