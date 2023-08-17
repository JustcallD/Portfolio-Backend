const express = require("express");
const SignUpRouter = express.Router();
const SignUp = require("../Controllers/SignUp");

SignUpRouter.get("/", SignUp);

module.exports = SignUpRouter;
