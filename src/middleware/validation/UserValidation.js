const Validator = require("validatorjs");
const { User } = require("../../models");
const { Op } = require("sequelize");

const RegisterValidation = async (req, res, next) => {
  try {
    const { name, username, email, password, confirm_password } = req.body;

    const data = {
      name,
      username,
      email,
      password,
      confirm_password,
    };

    const rules = {
      name: "required|string|max:50",
      username: "required|alpha_num|max:10",
      email: "required|email",
      password: "required|min:8",
      confirm_password: "required|same:password",
    };

    const validation = new Validator(data, rules);

    if (validation.fails()) {
      return res.status(400).send({
        status: 400,
        message: "Bad Request",
        errors: validation.errors,
        data: null,
      });
    }

    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ username: username }, { email: email }],
      },
    });

    if (existingUser) {
      const errorData = {};

      if (existingUser.username === username) {
        errorData.username = "Username already used";
      }

      if (existingUser.email === email) {
        errorData.email = "Email already used";
      }

      return res.status(400).send({
        status: 400,
        message: "Bad Request",
        errors: errorData,
      });
    }

    next();
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message,
      errors: err,
    });
  }
};

module.exports = {
  RegisterValidation,
};
