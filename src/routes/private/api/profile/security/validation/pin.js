import Authenticator from "authenticator";
import readMarkdown from "read-markdown";
import sgMail from "@sendgrid/mail";
import { Password } from "../../../../../../security";

const API_KEY = process.env.API_KEY;

sgMail.setApiKey(API_KEY);

export default async (req, res) => {
  try {
    const { user, body } = req;
    const { pin_code } = body;

    if (!pin_code)
      return res.send({
        code: 0,
        message: "Envie o pin.",
      });

    const pinCode = Password.hash(pin_code);

    await user.update({ usuario_pin: pinCode });

    const Markdown = await readMarkdown("./resources/email-example.md");

    //TODO: Talvez criar um "transactional template" seja melhor que o Markdown
    await sgMail.send({
      // FIXME: não encontrei nada na documentação sobre fromName nem toName
      // fromName: "SISTEMA SUPORTE",
      // toName: user.usuario_nome,
      to: user.usuario_email,
      from: "email@example.com",
      subject: "PIN DE SEGURANÇA",
      text: "Seu código de recuperação do e-mail",
      html: Markdown.replace("%token%", pinCode),
    });

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
