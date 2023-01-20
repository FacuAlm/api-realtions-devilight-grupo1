import { User, Comment } from "../models/index.js";

export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

export const getUser = async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    include: [Comment],
  });
  res.json(user);
};

export const updateUser = async (req, res) => {
  const user = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.json(`Usuario actualizado: ${user}`);
};

export const deleteUser = async (req, res) => {
  const user = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json("Usuario eliminado");
};
