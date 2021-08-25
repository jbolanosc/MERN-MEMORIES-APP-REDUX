import mongoose from "mongoose";
import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    return res.send(posts).status(200);
  } catch (e) {
    console.log(e, "error");
    return res.send("Server Error" + e).status(500);
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    if (post) return res.send(post).status(200);

    return res.send("No post found").status(404);
  } catch (e) {
    return res.send("Server Error").status(500);
  }
};

export const createPost = async (req, res) => {
  try {
    const { data } = req.body;

    const newPost = new Post(data);

    await newPost.save();

    return res.send("Creation Success").status(200);
  } catch (e) {
    return res.send("Server Error " + e).status(500);
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.send("Invalid ID").status(400);

    const post = await Post.findByIdAndUpdate(id, data, { new: true });

    return res.send(post + "updated").status(200);
  } catch (e) {
    return res.send("Server Error").status(500);
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.send("Invalid ID").status(400);
    await Post.findByIdAndRemove(id);

    return res.send("Post deleted").status(200);
  } catch (e) {
    return res.send("Server Error").status(500);
  }
};

export const addLike = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const post = await Post.findById(id);

    if (!post) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndUpdate(
      id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );

    return res.send("Post liked").status(200);
  } catch (e) {
    return res.send("Server Error").status(500);
  }
};

export const addVisitors = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const post = await Post.findById(id);

    if (!post) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndUpdate(
      id,
      { visitors: post.visitors + 1 },
      { new: true }
    );

    return res.send("Post liked").status(200);
  } catch (e) {
    return res.send("Server Error").status(500);
  }
};
