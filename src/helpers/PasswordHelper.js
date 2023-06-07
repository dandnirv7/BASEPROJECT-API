const bcrypt = require("bcryptjs");

const PasswordHashing = async (password) => {
  const result = await bcrypt.hash(password, 10);
  return result;
};

const PasswordCompare = async (password, passwordHash) => {
  const matched = await bcrypt.compare(password, passwordHash);
  return matched;
};

const ValidatePassword = (password, confirm_password) => {
  return password === confirm_password;
};
module.exports = {
  PasswordHashing,
  PasswordCompare,
  ValidatePassword,
};
