import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  product_id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'User',
  }
})

const Review = mongoose.model('Review', reviewSchema);

export default Review;