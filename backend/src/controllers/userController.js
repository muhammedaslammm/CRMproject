import User from "../models/UserModel.js";
import validator from "validator";
import { createHashedpass } from "../utils/hashPass.js";
import { createToken, verifyToken } from "../utils/jwtToken.js";

export const userAuthorizationStat = (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "authentication denied" });
  try {
    const { userid } = verifyToken(token);
    res.json({ message: "user authenticated", userid });
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

export const registerUser = async (req, res) => {
  try {
    console.log("req body:", req.body);
    const { firstname, lastname, email, password } = req.body;

    const matching_mail = await User.findOne({ email });
    if (matching_mail)
      return res.json({
        success: false,
        message: "email already registered",
        matching_email: true,
      });
    if (!validator.isEmail(email))
      return res.json({ success: false, message: "enter a valid email" });
    if (password.length < 6)
      return res.json({
        success: false,
        message: "password must have atleast 6 characters",
      });

    const hashed_password = await createHashedpass(password);
    const new_user = new User({
      firstname,
      lastname,
      email,
      password: hashed_password,
    });

    const user = await new_user.save();
    console.log("user created:", user.lastname);

    // token
    const token = createToken(user._id);
    console.log("token:", token);
    res
      .cookie("token", token, { httpOnly: true, secure: true })
      .json({ success: true, message: "user created", userid: user._id });

    //
  } catch (error) {
    console.log("error", error.message);
    res.json({ success: false, message: "user creation failed!" });
  }
};

export const signinUser = () => {};

export const signoutUser = () => {};
