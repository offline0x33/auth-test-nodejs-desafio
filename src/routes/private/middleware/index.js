import { Jwt } from "../../../security";
import { TokenBlacklist, User } from "../../../db/model";

export default async (req, res, next) => {
  try {
    // Normaliza a chave do cabeçalho para garantir que você obtenha o valor correto
    const authorization = req.headers['authorization'] || req.headers['Authorization'];

    if (!authorization) {
      return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
    }

    const token = authorization.replace("Bearer ", "");

    const verified = Jwt.verify(token);

    const blacklist = await TokenBlacklist.findOne({
      where: {
        token: token,
      },
    });

    if (blacklist)
      return res.send({
        code: 0,
        message:
          "Token se encontra bloqueado, faça login novamente: ou entre em contato com o Suporte suporte@exemplo.com",
      });

    const user = await User.findOne({
      where: {
        usuario_id: verified.sub,
      },
    });

    if (!user) return res.send({ code: 0, message: "Usuário não encontrado." });

    // console.log(user.dataValues);

    console.log("Token verificado" + JSON.stringify(verified));

    req.user = user.dataValues;
    req.token = verified;
    req.jwt = token;

    next();
  } catch {
    return res.send({
      code: 0,
      message: "Você precisa estar logado para realizar esta ação.",
    });
  }
};
