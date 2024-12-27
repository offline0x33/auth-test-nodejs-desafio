import crypto from "crypto";
import moment from "moment";
import { User } from "../../../db/model";

export default async (req, res) => {
  try {
    const { user, token } = req;

    const Exp = new Date(token.exp * 1000);

    const Indicados = await User.findAll({
      where: {
        usuario_id_patrocinador: user.usuario_id,
      },
    });

    return res.send({
      code: 1,
      message: true,
      userInfo: {
        _id: crypto.createHash("md5").update(user.usuario_id).digest("hex"),
        uLogin: user.usuario_login,
        uNome: user.usuario_nome,
        uAvatar: user.usuario_avatar,
        uGraduacao: user.usuario_graduacao,
        uLinkIndicacion: `site.com/${user.usuario_login}`, //FIXME:: Colocar o link certo

        uSessionExpirationNow: moment().format("dd/mm/yyyy hh:mm:ss"),
        uSessionExpiration: moment(Exp).format("dd/mm/yyyy hh:mm:ss"),

        uEmail: {
          verificado: false, //FIXME: Tem muito valor "hard-coded", você não deveria retirar eles de algum lugar?
          email: user.usuario_email,
        },
        uTelefone: {
          verificado: false,
          telefone: user.usuario_telefone,
        },
        uSeguranca: {
          auth: false,
          pin: false,
        },
      },
    });
  } catch (err) {
    res.send({
      code: 0,
      message: "Alguma coisa deu errado. Entre em contato com a administração.",
    });
  }
};

/*
// It was already commented out in the original source
  'uInvestimentos' => array(
      'total' => $this->db->where('cota_id_dono', $userID)->from('tb_cotas')->count_all_results(),
      'pendente' => "0", //$this->db->where('cota_id_dono', $userID)->where('cota_status', 0)->from('tb_cotas')->count_all_results(),
      'pendente_valor' => $this->Utilidades->valor(0), //$this->Utilidades->valor($this->db->select_sum('cota_valor')->where('cota_id_dono', $userID)->where('cota_status', 0)->from('tb_cotas')->get()->result_array()[0]['cota_valor']),
      'pendente_hash' => $this->db->select('cota_id_md5')->where('cota_id_dono', $userID)->where('cota_status', 0)->from('tb_cotas')->get()->result_array(),
      'ativos' => $this->db->where('cota_id_dono', $userID)->where('cota_status', 1)->from('tb_cotas')->count_all_results(),
      'ativos_valor' => $this->Utilidades->valor(0), //$this->Utilidades->valor($this->db->select_sum('cota_valor')->where('cota_id_dono', $userID)->where('cota_status', 1)->from('tb_cotas')->get()->result_array()[0]['cota_valor']),
      'finalizados' => "0", //$this->db->where('cota_id_dono', $userID)->where('cota_status', 2)->from('tb_cotas')->count_all_results(),
      'finalizados_valor' => $this->Utilidades->valor(0), //$this->Utilidades->valor($this->db->select_sum('cota_valor')->where('cota_id_dono', $userID)->where('cota_status', 2)->from('tb_cotas')->get()->result_array()[0]['cota_valor']),
  )
*/
