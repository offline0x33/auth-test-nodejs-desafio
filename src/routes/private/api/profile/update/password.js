import { Password } from "../../../../security";

export default async (req, res) => {
  try {
    const { user, body } = req;
    const { pwAtual, pwNova } = body;

    if (!pwAtual)
      return res.send({ code: 0, message: "Insira o a senha atual." });
    if (!pwNova) return res.send({ code: 0, message: "Insira a nova senha." });

    if (user.usuario_senha !== pwAtual)
      return res.send({
        code: 0,
        message: "A senha atual está incorreta!",
      });

    const invalidPassword = Password.validate(password);
    if (invalidPassword) return res.send({ code: 0, message: invalidPassword });

    const hashedPassword = await Password.hash(password);
    await user.update({ usuario_senha: hashedPassword });

    res.send({ code: 1, message: "Senha alterada com sucesso!" });
  } catch (err) {
    res.send({
      code: 0,
      message:
        "Alguma coisa deu errado. Entre em contato com os administradores",
      error: err.message,
    });
  }
};
