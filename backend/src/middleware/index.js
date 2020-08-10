'use strict'

const { stringToArray } = require('../utils/parser');

const env = require('dotenv').config()

const api_token = process.env.API_TOKEN;
console.log(api_token)

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      success: false,
      message: "You must provide a Authorization header with a Bearer Token on request"
    });
  }

  const [authorization_method, token] = stringToArray(authorization, " ");

  if (authorization_method != "Bearer") {
    return res.status(401).json({
      success: false,
      message: "You must to make explicity Authorization as Bearer token"
    });
  }

  if (api_token != token) {
    return res.status(401).json({
      success: false,
      message: "You token is invalid"
    });
  }

  return next();
}
