import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: { Number, default: 0 },
    visitors: { Number, default: 0 },
  },
  { timestamps: true }
);

let Post = mongoose.model("Post", postSchema);

export default Post;
