const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  placeName: {
    type: String,
    required: true,
  },
  activityName: {
    type: String,
    required: true,
  },
  activityImage: {
    type: String,
    required: true,
  },
  activityPrice: {
    type: Number,
    required: true,
  },
  activityStartTime: {
    type: Number,
    required: true,
  },
  activityEndTime: {
    type: Number,
    required: true,
  },
});

const Activity = mongoose.model("Activities", activitySchema);
module.exports = Activity;
