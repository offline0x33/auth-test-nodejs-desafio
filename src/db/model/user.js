import Sequelize from "sequelize";
import sequelize from "..";

const Model = Sequelize.Model;
class User extends Model { }
User.init(
  {
    // acess colums
    usuario_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    usuario_senha: { type: Sequelize.STRING },
    usuario_email: { type: Sequelize.STRING },
    usuario_nome: { type: Sequelize.STRING },
  },
  {
    sequelize,
    modelName: "tb_usuarios",
    freezeTableName: true,
    timestamps: false,
    // options
  },
);

export default User;
