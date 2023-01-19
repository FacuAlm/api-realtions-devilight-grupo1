import { DataTypes } from "sequelize";

import db from "../config/db.js";

const Comment = db.define(
  "Comment",
  {
    text: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "comments",
  }
);

db.sync();

export default Comment;
