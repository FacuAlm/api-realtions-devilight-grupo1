import User from "./User.js";
import Comment from "./Comment.js";

User.belongsToMany(Comment, { through: "user_comments" });
Comment.belongsTo(User, { through: "user_comments" });

export { User, Comment };
