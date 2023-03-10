const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  cityName: String,
  cityId: String,
  famousPlaces: [
    {
      placeName: String,
      required: true,
    },
  ],
});

const City = mongoose.model("CITY", citySchema);
module.exports = City;
