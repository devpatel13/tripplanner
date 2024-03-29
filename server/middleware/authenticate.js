const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const authenticate = async (req, res, next) => {
  try {
    //new
    //grab token from cookie to validate
    // console.log(req.cookies);
    const token = req.cookies.token;
    //check for token
    if (!token || token == undefined) {
      res.status(403).json({
        success: false,
      });
    } else {
      // console.log(token);

      //decode token
      const decodedTok = jwt.verify(token, process.env.SECERET_KEY);
      req.user = decodedTok;
      // console.log(req);
      next();
    }

    // console.log(decodedTok);
  } catch (error) {
    console.log(error);
    res.status(401).send("Invalid token");
  }

  //old
  // try {
  //   // const token = req.cookies.jwtoken;
  //   // const verifyToken = jwt.verify(token, process.env.SECERET_KEY);

  //   // const rootUser = await User.findOne({
  //   //   _id: verifyToken._id,
  //   //   "tokens.token": token,
  //   // });

  //   // if (!rootUser) {
  //   //   throw new Error("User not Found");
  //   // }

  //   // req.token = token;
  //   // req.rootUser = rootUser;
  //   // req.userID = rootUser._id;

  //   const token = req.headers.authorization;
  //   if (token) {
  //     constuseToken = token.split(" ")[1];
  //     const verifyToken = jwt.verify(useToken, process.env.SECERET_KEY);
  //     req.userData = verifyToken._id;
  //   } else {
  //     res.status(401).send("Unauthorized User 1");
  //   }

  //   next();
  // } catch (error) {
  //   console.log(error);
  //   res.status(401).send("Unauthorized User");
  // }
};

module.exports = authenticate;
