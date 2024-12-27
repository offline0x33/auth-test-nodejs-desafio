import Sequelize from "sequelize";
import sequelize from "..";

const Model = Sequelize.Model;
class TokenBlacklist extends Model { }

TokenBlacklist.init(
  {
    // acess colums

    tokenblacklist_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
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
