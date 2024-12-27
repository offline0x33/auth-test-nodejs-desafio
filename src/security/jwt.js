import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

const verify = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

const sign = (token) => {
  return jwt.sign(token, JWT_SECRET);
};

export default { verify, sign, JWT_SECRET };
