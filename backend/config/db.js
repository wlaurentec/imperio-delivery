import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://imperiodel:Manzanza01*@cluster0.7lwv3.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB Connected");
    });
};
