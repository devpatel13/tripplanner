const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");

require("../db/conn");
const User = require("../models/userSchema");
const Places = require("../models/placesSchema");
const Activity = require("../models/activitySchema");

router.use(cookieParser());
// get
router.get("/home", async (req, res) => {
  try {
    const allPlaces = await Places.find();
    res.send({ data: allPlaces });
  } catch (error) {
    console.log(error);
  }
});

router.get("/update", async (req, res) => {
  try {
    const allPlaces = await Places.find();
    res.send({ data: allPlaces });
  } catch (error) {
    console.log(error);
  }
});

router.get("/editactivity", async (req, res) => {
  try {
    placeName = req.query.placeName;
    // console.log(placeName);
    const allActivities = await Activity.find({ placeName: placeName });
    res.send({ data: allActivities });
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", authenticate, async (req, res) => {
  try {
    if (req.user) {
      const user = await User.findOne({ _id: req.user.id });
      if (user)
        res.status(200).json({
          user,
        });
      else {
        res.status(400).json({ error: true });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: true });
  }
});

router.get("/login", (req, res) => {
  res.send("login");
});

router.get("/logout", (req, res) => {
  try {
    res.clearCookie("token");
    res.json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
});

// router.get("/signup", (req, res) => {
//   res.send("signup");
// });

router.get("/contact", (req, res) => {
  res.send("contact");
});

router.get("/maketrip", async (req, res) => {
  try {
    placeName = req.query.placeName;
    // console.log(placeName);
    const allActivities = await Activity.find({ placeName: placeName });
    res.send({ data: allActivities });
  } catch (error) {
    console.log(error);
  }
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

    //new: encrypt data
    const encryptPass = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      phone,
      password: encryptPass,
    });

    //generate jwt token
    const token = jwt.sign({ id: user._id, email }, process.env.SECERET_KEY, {
      expiresIn: "2h",
    });
    user.token = token;

    //old
    // const user = new User({ name, email, phone, password:encryptPass });

    // const userRegistered = await user.save();
    if (user) {
      res.status(201).json({ message: "You are registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// admin addplace
router.post("/addplace", async (req, res) => {
  const { name, image, desc } = req.body;
  // console.log("in");

  if (!name || !image || !desc) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
    const placeExist = await Places.findOne({ placeName: name });
    if (placeExist) {
      return res.status(422).json({ error: "Place already exists." });
    }

    const place = new Places({
      placeName: name,
      placeImage: image,
      placeDesc: desc,
    });

    const addPlace = await place.save();
    if (addPlace) {
      res.status(201).json({ message: "Place added successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// admin updateplace
router.post("/updateplace", async (req, res) => {
  const { placeName, name, image, desc } = req.body;
  // console.log("in");

  if (!placeName || !name || !image || !desc) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
    //
    const result = await Places.updateOne(
      { placeName },
      {
        $set: {
          placeName: name,
          placeImage: image,
          placeDesc: desc,
        },
      }
    );
    if (result) {
      res.status(201).json({ message: "Place updated successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// admin updateactivity
router.post("/updateactivity", async (req, res) => {
  const {
    rootActivityName,
    placeName,
    activityName,
    activityImage,
    activityPrice,
    activityStartTime,
    activityEndTime,
  } = req.body;

  if (
    !rootActivityName ||
    !placeName ||
    !activityName ||
    !activityImage ||
    !activityPrice ||
    !activityStartTime ||
    !activityEndTime
  ) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
    //
    const result = await Activity.updateOne(
      { rootActivityName },
      {
        $set: {
          placeName: placeName,
          activityName: activityName,
          activityImage: activityImage,
          activityPrice: activityPrice,
          activityStartTime: activityStartTime,
          activityEndTime: activityEndTime,
        },
      }
    );
    if (result) {
      res.status(201).json({ message: "Activity updated successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// admin deleteplace
router.post("/deleteplace", async (req, res) => {
  const { placeName } = req.body;
  // console.log("in");

  if (!placeName) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
    //
    const result = await Places.deleteOne({ placeName });
    if (result) {
      res.status(201).json({ message: "Place deleted successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/deleteactivity", async (req, res) => {
  const { activityName } = req.body;
  // console.log("in");

  if (!activityName) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
    //
    const result = await Activity.deleteOne({ activityName });
    if (result) {
      res.status(201).json({ message: "Activity deleted successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// add activity
router.post("/addactivity", async (req, res) => {
  const {
    placeName,
    activityName,
    activityImage,
    activityPrice,
    activityStartTime,
    activityEndTime,
  } = req.body;

  if (
    !placeName ||
    !activityName ||
    !activityImage ||
    !activityPrice ||
    !activityStartTime ||
    !activityEndTime
  ) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  try {
    const activity = new Activity({
      placeName,
      activityName,
      activityImage,
      activityPrice,
      activityStartTime,
      activityEndTime,
    });

    const addActivity = await activity.save();
    if (addActivity) {
      res.status(201).json({ message: "Activity added successfully" });
    }
  } catch (error) {
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
        //new: generate token
        const token = jwt.sign({ id: userExist._id }, process.env.SECERET_KEY, {
          expiresIn: "2h",
        });
        userExist.token = token;
        userExist.password = undefined;
        userExist.phone = undefined;

        //cookies
        const options = {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 100),
          httpOnly: true,
        };
        res.status(200).cookie("token", token, options).json({
          success: true,
          userExist,
        });

        //old
        // const token = await userExist.generateAuthToken();
        // res.json({ message: "User Login successful", token: token });
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
  // console.log(req.);
  //old
  res.json({ message: "User valid" });
});

module.exports = router;
