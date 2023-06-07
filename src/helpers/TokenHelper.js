const jwt = require("jsonwebtoken");
require("dotenv").config();

const GenerateToken = (data) => {
  const token = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });

  return token;
};
const GenerateRefreshToken = (data) => {
  const token = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });

  return token;
};

const ExtractToken = (token) => {
  const secretKey = process.env.ACCESS_TOKEN_SECRET;

  let resData;

  const res = jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      resData = null;
    } else {
      resData = decoded;
    }
  });

  if (resData) {
    const result = resData;
    return result;
  }

  return null;
};

const ExtractRefreshToken = (token) => {
  const secretKey = process.env.REFRESH_TOKEN_SECRET;

  let resData;

  const res = jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      resData = null;
    } else {
      resData = decoded;
    }
  });

  if (resData) {
    const result = resData;
    return result;
  }

  return null;
};

module.exports = {
  GenerateToken,
  GenerateRefreshToken,
  ExtractToken,
  ExtractRefreshToken,
};
