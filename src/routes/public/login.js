import { Password, Jwt } from "../../security";
import { User } from "../../db/model";

export default async (req, res) => {
  try {
    const { usuario_email, usuario_senha } = req.body;

    // Valida informações no POST
    if (!usuario_email || !usuario_senha) {
      return res.send({ code: 0, message: "Preencha todos os campos." });
    }
    console.log(req.body);
    // Consulta Usuário
    const user = await User.findOne({
      attributes: [
        "usuario_id",
        "usuario_senha",
        "usuario_nome",
        "usuario_email"
      ],
      where: { usuario_email },
    });
    if (!user)
      return res.send({
        code: 0,
        message: "O login digitado não foi encontrado.",
      });

    // Verifica a senha
    const isValid = await Password.compare(usuario_senha, user.usuario_senha);
    if (!isValid)
      return res.send({ code: 0, message: "Usuário ou senha incorretos." });


    // Gera o token e valida o login
    const payload = {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 1, //Uma hora de válidade
      sub: user.usuario_id,
      data: {
        info: {
          name: user.usuario_nome,
          email: user.usuario_email,
        },
      },
    };

    const token = Jwt.sign(payload);
    res.send({
      code: 1,
      message: "Usuario logado com sucesso!",
      data: { token },
    });
  } catch (err) {
    res.send({
      code: 0,
      message: "Alguma coisa deu errado. Tente novamente mais tarde.",
    });
  }
};
