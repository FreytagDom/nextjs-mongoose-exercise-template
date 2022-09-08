import mongoose from "mongoose";

const { Schema } = mongoose;

const questionSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: Number, required: true },
  options: [{ type: String, required: true }],
});

// Model Name "Product" --> Collection Name "products"
const Quiz =
  mongoose.models.quiz || mongoose.model("questions", questionSchema);

export default Quiz;
