const { User } = require("../models");
const HelperToken = require("../helpers/TokenHelper");
const PasswordHelper = require("../helpers/PasswordHelper");

const SignUp = async (req, res) => {
  try {
    const { name, username, email, password, confirm_password, phone } =
      req.body;

    const defaultRoleId = 3 || role_id;

    const passwordHashed = await PasswordHelper.PasswordHashing(password);

    if (!PasswordHelper.ValidatePassword(password, confirm_password)) {
      return res.status(400).send({
        status: 400,
        message: "password and confirm password do not match",
        data: null,
      });
    }

    const user = await User.create({
      name,
      username,
      email,
      password: passwordHashed,
      phone,
      role_id: defaultRoleId,
    });

    return res.status(201).send({
      status: 201,
      message: "Created",
      data: user,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(401).send({
        status: 401,
        message: "Unauthorized",
        data: null,
      });
    }

    const matched = await PasswordHelper.PasswordCompare(
      password,
      user.password
    );

    if (!matched) {
      return res.status(401).send({
        status: 401,
        message: "Unauthorized",
        data: null,
      });
    }

    const dataUser = {
      role_id: user.role_id,
      username: user.username,
      email: user.email,
      phone: user.phone,
    };

    const token = HelperToken.GenerateToken(dataUser);
    const refreshToken = HelperToken.GenerateRefreshToken(dataUser);

    user.accessToken = refreshToken;
    await user.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    const responseUser = {
      role_id: user.role_id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      token: token,
    };

    return res.status(200).send({
      status: 200,
      message: "Successfully login",
      data: responseUser,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const FindAllUser = async (req, res) => {
  try {
    const user = await User.findAll();

    return res.status(200).send({
      status: 200,
      message: "OK",
      data: user,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const FindOneUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    return res.status(200).send({
      status: 200,
      message: "OK",
      data: user,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { role_id, username, email, password, phone } = req.body;
    const defaultRoleId = 1;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).send({
        status: 404,
        message: "User Not Found",
        data: null,
      });
    }

    user.role_id = role_id || defaultRoleId;
    user.username = username;
    user.email = email;
    user.password = password;
    user.phone = phone;

    await user.save();

    return res.status(200).send({
      status: 200,
      message: "Update Successfully",
      data: user,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const PatchUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { role_id, username, email, password, phone } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).send({
        status: 404,
        message: "User Not Found",
        data: null,
      });
    }

    if (role_id) {
      user.role_id = role_id;
    }

    if (username) {
      user.username = username;
    }

    if (email) {
      user.email = email;
    }

    if (password) {
      user.password = password;
    }

    if (phone) {
      user.phone = phone;
    }

    await user.save();

    return res.status(200).send({
      status: 200,
      message: "Update Successfully",
      data: user,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).send({
        status: 404,
        message: "Data Not Found",
        data: null,
      });
    }

    await user.destroy();

    return res.status(200).send({
      status: 200,
      message: "Data has been deleted",
      data: null,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

module.exports = {
  SignUp,
  SignIn,
  FindAllUser,
  FindOneUser,
  UpdateUser,
  PatchUser,
  DeleteUser,
};
