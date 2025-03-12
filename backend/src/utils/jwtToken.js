import jwt from "jsonwebtoken";

export const createToken = (userid) => {
  return jwt.sign({ userid }, process.env.JWT_SECRET);
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
