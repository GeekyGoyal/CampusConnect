const mongoose = require("mongoose");


// Regular Expressions (Regex)
// The position anchors ^  matches the beginning of the input string
// \w+ matches 1 or more word characters (same as [a-zA-Z0-9_]+).
// [.-]? matches an optional character . or -. 
// ([.-]?\w+)* matches 0 or more occurrences of [.-]?\w+.
//  The @ matches itself. 

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@chitkarauniversity.edu.in/,
      "Please provide Email of the same organization!",
    ],
  },
  password: {
    type: String, 
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
