import Authenticator from "authenticator";

export default async (req, res) => {
  try {
    const { user, body } = req;
    const { auth_code, auth_pin: authPin } = body;

    if (!auth_code || !authPin)
      return res.send({
        code: 0,
        message: "Envie o código e o pin.",
      });

    const authCode = new Buffer(auth_code, "base64");

    const verified = Authenticator.verifyToken(authCode, authPin);

    if (!verified)
      return res.send({
        code: 0,
        message: "Código inválido.",
      });

    await user.update({ usuario_pin_auth: auth_code });

    res.send({
      code: 1,
      message: "Validado com sucesso",
    });
  } catch (err) {
    res.send({
      code: 0,
      message:
        "Alguma coisa deu errado. Entre em contato com os administradores",
      error: err.message,
    });
  }
};
