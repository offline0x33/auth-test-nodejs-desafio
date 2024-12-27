import bcrypt from "bcrypt";

const validate = (password) => {
  // Verificação de "força" da senha

  if (password.length < 10) return "Senha muito curta";
  // else
  return true;
};

const compare = async (decrypted, encrypted) => {
  return bcrypt.compare(decrypted, encrypted.replace("$2y$", "$2a$"));
};

const hash = (password) => {
  //FIXME:: deveria dar o replace ao contrário aqui?
  return bcrypt.hash(password, 10);
};

export default { validate, hash, compare };
