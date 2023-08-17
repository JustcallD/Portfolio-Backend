const express = require("express");
const SignUpRouter = express.Router();
const SignUp = require("../Controllers/SignUp");

SignUpRouter.post("/", SignUp);

module.exports = SignUpRouter;
