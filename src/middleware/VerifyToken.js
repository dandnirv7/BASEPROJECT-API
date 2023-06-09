const TokenHelper = require("../helpers/TokenHelper");
const VerifyToken = (req, res, next) => {
  try {
    const authToken = req.headers["authorization"];
    const token = authToken && authToken.split(" ")[1];

    if (!token) {
      return res.status(401).send({
        status: 401,
        message: "Unauthorized",
      });
    }

    const result = TokenHelper.ExtractToken(token);
    if (!result) {
      return res.status(401).send({
        status: 401,
        message: "Unauthorized",
      });
    }

    res.locals.role_id = result.role_id;
    res.locals.user_id = result.user_id;

    next();
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: err.message || "Internal server error",
      errors: err,
    });
  }
};

const SuperUser = (req, res, next) => {
  try {
    const role_id = res.locals.role_id;

    if (role_id !== 1) {
      return res.status(403).send({
        status: 403,
        message: "Forbidden",
        errors: null,
      });
    }

    next();
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "",
      errors: err,
    });
  }
};
const Admin = (req, res, next) => {
  try {
    const role_id = res.locals.role_id;

    if (role_id !== 2) {
      return res.status(403).send({
        status: 403,
        message: "Forbidden",
        errors: null,
      });
    }

    next();
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "",
      errors: err,
    });
  }
};
const BasicUser = async (req, res, next) => {
  try {
    const role_id = res.locals.role_id;
    const user_id = res.locals.user_id;

    if (role_id !== 3) {
      return res.status(403).send({
        status: 403,
        message: "Forbidden",
        errors: null,
      });
    }

    next();
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "",
      errors: err,
    });
  }
};

module.exports = {
  VerifyToken,
  SuperUser,
  Admin,
  BasicUser,
};
