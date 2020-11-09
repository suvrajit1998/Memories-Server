import express from "express";

import {
  getPosts,
  creatPost,
  updatePost,
  deletePost,
  likePost,
} from "../controller/post.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", creatPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likepost", likePost);

export default router;
