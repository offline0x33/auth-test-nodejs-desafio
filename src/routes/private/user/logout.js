import crypto from "crypto";
import moment from "moment";
import { TokenBlacklist } from "../../../db/model";

export default async (req, res) => {
  try {
    const { user, token, jwt } = req;

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

    let created = await TokenBlacklist.create({
      token: jwt,
    });
    if (created) {
      res.send({ code: 1, message: "Logout com sucesso!" });
    }
  } catch (err) {
    console.error(err); // Adiciona o log do erro para ajudar na depuração
    res.status(500).send({
      code: 0,
      message: "Alguma coisa deu errado. Entre em contato com a administração.",
    });
  }
};