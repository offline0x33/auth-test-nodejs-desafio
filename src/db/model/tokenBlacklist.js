import Sequelize from "sequelize";
import sequelize from "..";

const Model = Sequelize.Model;
class TokenBlacklist extends Model { }
TokenBlacklist.init(
  {
    tokenblacklist_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    token: { type: Sequelize.STRING },
  },
  {
    sequelize,
    modelName: "tb_token_blacklist",
    freezeTableName: true,
    timestamps: false,
    // options
  },
);

export default TokenBlacklist;
