import mongoose from "mongoose";

let Schema = mongoose.Schema;

export const baseOptions = {
  discriminatorKey: "type",
};

const schema = new Schema({
  productType: {
    type: Schema.ObjectId,
    ref: "productType",
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
}, baseOptions);

export default mongoose.model("base", schema);
