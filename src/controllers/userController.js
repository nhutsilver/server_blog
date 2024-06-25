import User from "../models/userModel";
import jwt from "jsonwebtoken";

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    console.log("user", user);
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Username is not exist" });
    }
    const token = jwt.sign({ username: user.username }, "your_secret_key", {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Login is successfully", token, user });
  } catch (error) {
    console.log("error login: ", error);
    res.status(500).json({ message: "Occur when login" });
  }
};
