import bcrypt from "bcrypt";

export const createHashedpass = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashed_pass = await bcrypt.hash(password, salt);
  return hashed_pass;
};
