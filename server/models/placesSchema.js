const mongoose = require("mongoose");

const placesSchema = new mongoose.Schema({
  placeName: {
    type: String,
    required: true,
  },
  placeImage: {
    type: String,
    required: true,
  },
  placeDesc: {
    type: String,
    required: true,
  },
  // activities: [
  //   {
  //     activityName: String,
  //     activityimage: String,
  //     activityPrice: Number,
  //     activityStartTime: Number,
  //     activityEndTime: Number,
  //   },
  // ],
});

const Places = mongoose.model("TouristPlace", placesSchema);
module.exports = Places;
