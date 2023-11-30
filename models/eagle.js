  const mongoose = require("mongoose");

  const eagleSchema = mongoose.Schema({
      name: String,
      age: {
          type: Number,
          max: 20, // Set your maximum allowed value
          validate: {
              validator: function(value) {
                  return value <= 20;
              },
              message: 'Age cannot exceed 20',
          },
      },
      description: String,
  });
  
  module.exports = mongoose.model("eagle", eagleSchema);