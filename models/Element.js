const { model, Schema } = require("mongoose");

const Element = new Schema({
  text: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Element", Element);