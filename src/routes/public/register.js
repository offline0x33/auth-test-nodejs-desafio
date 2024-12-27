import { isEmail } from "validator";
import { Op } from "sequelize";
import { User } from "../../db/model";
import { Password } from "../../security";

export default async (req, res) => {
  const {
    usuario_nome,
    usuario_email,
    usuario_senha,
  } = req.body;

  try {
    if (
      !usuario_nome ||
      !usuario_senha ||
      !usuario_email
    ) {
      return res.send({ code: 0, message: "Preencha todos os campos." });
    }

    if (usuario_nome.length < 5)
      return res.send({ code: 0, message: "Nome inválido." });

    const invalidPassword = Password.validate(usuario_senha);

    if (!invalidPassword)
      return res.send({ code: 0, message: invalidPassword });

    if (!isEmail(usuario_email))
      return res.send({ code: 0, message: "E-mail inválido." });

    const exists = await User.findOne({
      where: {
        usuario_email: usuario_email // Forma mais direta e eficiente quando há apenas uma condição
      },
    });

    if (exists) return res.send({ code: 0, message: "Usuário já existente" });

    console.log("antes do password hash");
    const hashedPassword = await Password.hash(usuario_senha);
    const Today = new Date();

    console.log(hashedPassword);

    let created = await User.create({
      usuario_nome,
      usuario_email,
      usuario_senha: hashedPassword,
    });
    if (created) {
      res.send({ code: 1, message: "Conta cadastrada com sucesso!" });
    }
  } catch (err) {
    res.send({
      code: 0,
      message:
        "Houve algum problema ao realizar o cadastro, entre em contato com os administradores!",
      err: err,
    });
  }
};
