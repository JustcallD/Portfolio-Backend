const express = require("express");
const app = express();
app.use(express.json());

// ENV
const dotenv = require("dotenv");
dotenv.config();
// CORS
const cors = require("cors");
app.use(cors());
// DB connection
require("./DB/Connect");

// IMPORT
const SignUpRouter = require("./Routers/SignUp");

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/signUp", SignUpRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server Running: http://localhost:${PORT}`));
