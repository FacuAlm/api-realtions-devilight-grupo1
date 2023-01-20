import { User, Comment } from "../models/index.js";

export const createComment = async (req, res) => {
  const user = await User.findByPk(req.body.userId);
  const comment = await Comment.create(req.body);
  await user.addComment(comment);
  res.json(comment);
};

export const getComments = async (req, res) => {
  const comments = await Comment.findAll();
  res.json(comments);
};

export const getComment = async (req, res) => {
  const comment = await Comment.findByPk(req.params.id);
  res.json(comment);
};

export const updateComment = async (req, res) => {
  const comment = await Comment.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json(`Comentario actualizado: ${comment}`);
};

export const deleteComment = async (req, res) => {
  const comment = await Comment.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json("Comentario eliminado");
};
