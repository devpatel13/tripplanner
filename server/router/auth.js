const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");

require("../db/conn");
const User = require("../models/userSchema");
const Places = require("../models/placesSchema");

router.use(cookieParser());
// get
router.get("/", (req, res) => {
  res.send("home");
});

router.get("/about", (req, res) => {
  res.send("about");
});

router.get("/login", (req, res) => {
  res.send("login");
});

// router.get("/signup", (req, res) => {
//   res.send("signup");
// });

router.get("/contact", (req, res) => {
  res.send("contact");
});

// post

// user registration
router.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exists." });
    }

    const user = new User({ name, email, phone, password });

    const userRegistered = await user.save();
    if (userRegistered) {
      res.status(201).json({ message: "You are registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// user login
// NOTE: registration using email. can change later
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Please enter email/password" });
    }

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      // Compare the passwords for validation
      const isMatch = await bcrypt.compare(password, userExist.password);

      // // Generate jsonwebtoken for user verification during session
      // const token = await userExist.generateAuthToken();

      // // Store token in cookies
      // res.cookie("jwtoken", token, {
      //   expires: new Date(Date.now() + 25892000000),
      //   httpOnly: true,
      // });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        const token = await userExist.generateAuthToken();
        res.json({ message: "User Login successful", token: token });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Logout
// router.post("/logout", authenticate, (req, res) => {
//   const delToken = req.body.token
// })

// Add tourist place
router.post("/addtouristplace", async (req, res) => {
  try {
    const { placeName, placeImage, placeState } = req.body;

    if (!placeName || !placeImage || !placeState) {
      return res.status(400).json({ error: " Please enter a valid input" });
    }

    const placeExist = await Places.findOne({
      placeName: placeName,
    });

    if (placeExist) {
      return res.status(422).json({ error: "Tourist place already exists." });
    }

    const touristPlace = new Places({
      placeName,
      placeImage,
      placeState,
    });
    const touristPlaceAdded = await touristPlace.save();

    if (touristPlaceAdded) {
      res.status(201).json({ message: "Tourist Place Added." });
    }
  } catch (error) {
    console.log(error);
  }
});

// Add activity
router.post("/addactivity", async (req, res) => {
  try {
    const { placeName, activities } = req.body;

    if (!placeName || !activities) {
      return res.status(400).json({ error: " Please enter a valid input" });
    }

    const placeExist = await Places.findOne({
      placeName: placeName,
    });

    if (placeExist) {
      // code to add activity
    } else {
      return res.status(422).json({ error: "Tourist place does not exist." });
    }
  } catch (error) {
    console.log(error);
  }
});

// about(profile) page
router.post("/about", authenticate, (req, res) => {
  res.json({ message: "User valid" });
});

module.exports = router;
