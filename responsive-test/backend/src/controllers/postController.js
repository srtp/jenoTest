const db = require("../model/stormDB");

const getAll = (req, res) => {
  const posts = db.get("posts").value();
  res.send(posts);
};

const getById = (req, res) => {
  const { id } = req.params;
  const posts = db.get("posts").value();
  const post = posts.filter((post) => post.id == id);
  res.send(post);
};

const createPost = (req, res) => {
  const post = req.body;
  db.get("posts").push(post).save();
  res.status(201).send({
    success: "ok",
  });
};

const delPost = (req, res) => {
  const { id } = req.params;
  db.get("posts")
    .filter((post) => post.id != id)
    .save();

  res.status(200).send({
    success: "ok",
  });
};

const updatePost = (req, res) => {
  const { id } = req.params;
  const post = req.body;
  const posts = db.get("posts").value();

  const indexPost = posts.findIndex((post) => post.id == id);
  db.get("posts").get(indexPost).set(post).save();
  res.status(200).send({ success: "ok" });
};

const patchLikePost = (req, res) => {
  const { id } = req.params;
  const like = req.body.like;
  const posts = db.get("posts").value();
  const indexPost = posts.find((post) => post.id == id);
  if (!indexPost) return res.status(404).json({ message: "Not Found" });

  indexPost.like = like;
  res.json(indexPost);
};

module.exports = {
  getAll,
  patchLikePost,
  getById,
  createPost,
  delPost,
  updatePost,
};
