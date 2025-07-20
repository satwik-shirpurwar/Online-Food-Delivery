import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://satwiksh123:lriutgMgdITx9mLe@cluster0.8tazpo8.mongodb.net/Food-Delivery').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.