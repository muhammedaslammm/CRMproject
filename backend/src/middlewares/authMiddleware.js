import { verifyToken } from "../utils/jwtToken.js";

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "UnAuthorized! No token provided" });
  try {
    const decoded = verifyToken(token);
    req.userid = decoded.userid;
    next();
  } catch (error) {
    res
      .status(403)
      .json({ success: false, message: "Forbidden! Invalid token" });
  }
};

export default authMiddleware;
