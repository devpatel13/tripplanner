const mongoose = require("mongoose");

const touristPlaceSchema = new mongoose.Schema({
  stateName: {
    type: String,
    required: true,
  },
  touristPlaceName: {
    type: String,
    required: true,
  },
  attractions: [
    {
      attractionName: String,
    },
  ],
});

const TouristPlace = mongoose.model("TouristPlace", touristPlaceSchema);
module.exports = TouristPlace;
