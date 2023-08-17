// const user = require("../Models/User");

// const SignUp = async (req, res, next) => {
//   const { username, email, password } = req.body;

//   try {
//     const userExist = await user.findOne({ email: email, username: username });
//     if (userExist) {
//       res.status(400).json({ Message: "user Already exists" });
//     }
//     const User = await user.create({
//       email: email,
//       password: password,
//       username: username,
//     });
//     res.status(200).json({ user: result });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "something went wrong" });
//   }
//   next();
// };

// module.exports = SignUp;

const User = require("../Models/User");

const SignUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const userExist = await User.findOne({ $or: [{ email }, { username }] });
    if (userExist) {
      return res.status(400).json({ Message: "User already exists" });
    }
    const newUser = await User.create({
      email: email,
      password: password,
      username: username,
    });
    res.status(200).json({ user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = SignUp;
