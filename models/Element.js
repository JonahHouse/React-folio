const { model, Schema } = require("mongoose");

const Element = new Schema({
  text: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

model.exports = model("Element", Element);
