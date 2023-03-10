const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema({
  stateName: {
    type: String,
    required: true,
  },
  cities: [
    {
      cityName: String,
      cityId: String,
      required: true,
    },
  ],
});

const State = mongoose.model("STATE", stateSchema);
module.exports = State;
