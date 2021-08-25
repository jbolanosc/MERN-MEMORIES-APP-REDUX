import express from "express";
import * as PostController from "../controllers/PostController.js";

const router = express.Router();

router
  .get("/", PostController.getPosts)
  .get("/:id", PostController.getPost)
  .post("/", PostController.createPost)
  .patch("/:id", PostController.updatePost)
  .patch("/:id/like", PostController.addLike)
  .patch("/:id/visitor", PostController.addVisitors)
  .delete("/:id", PostController.deletePost);

export default router;
