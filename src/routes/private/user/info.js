import crypto from "crypto";
import moment from "moment";

export default async (req, res) => {
  try {
    const { user, token } = req;

    if (!user || !token) {
      return res.status(400).send({
        code: 0,
        message: "Usuário ou token não fornecido.",
      });
    }

    if (!token.exp) {
      return res.status(400).send({
        code: 0,
        message: "Token não contém data de expiração.",
      });
    }

    const Exp = new Date(token.exp * 1000);

    return res.send({
      code: 1,
      message: true,
      userInfo: {
        _id: crypto.createHash("md5").update(user.usuario_id.toString()).digest("hex"),
        uNome: user.usuario_nome,

        uSessionExpirationNow: moment().format("DD/MM/YYYY HH:mm:ss"),
        uSessionExpiration: moment(Exp).format("DD/MM/YYYY HH:mm:ss"),

        uEmail: {
          verificado: false,
          email: user.usuario_email,
        },
        uSeguranca: {
          auth: false,
          pin: false,
        },
      },
    });
  } catch (err) {
    console.error(err); // Adiciona o log do erro para ajudar na depuração
    res.status(500).send({
      code: 0,
      message: "Alguma coisa deu errado. Entre em contato com a administração.",
    });
  }
};