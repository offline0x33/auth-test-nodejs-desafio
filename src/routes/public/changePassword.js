import { User } from "../../db/model";
import { Password, Jwt } from "../../security";

export default async (req, res) => {
  const { token, password } = req.body;

  if (!token) return res.send({ code: 0, message: "Insira o código." });
  if (!password) return res.send({ code: 0, message: "Insira a nova senha." });

  const invalidPassword = Password.validate(password);
  if (invalidPassword) return res.send({ code: 0, message: invalidPassword });

  try {
    const { email } = Jwt.verify(token);
    const user = await User.findOne({ where: { usuario_email: email } });
    if (!user) return res.send({ code: 0, message: "Usuário não encontrado." });

    const hashedPassword = await Password.hash(password);
    await user.update({ usuario_senha: hashedPassword });

    res.send({ code: 1, message: "A sua senha foi trocada" });
  } catch (err) {
    res.send({ code: 0, message: "Código inválido." });
  }
};
