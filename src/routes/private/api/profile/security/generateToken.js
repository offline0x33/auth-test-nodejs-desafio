import { Password } from "../../../../../security";
import Authenticator from "authenticator";

export default async (req, res) => {
  try {
    const Auth_Secret = Authenticator.generateToken();
    //Não entendi o motivo de "testar o serviço" voltando pro cliente, então deixei só isso.
    res.send({
      Auth_Secret,
      definePageSelection: "security",
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
