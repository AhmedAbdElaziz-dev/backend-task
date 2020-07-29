import mongoose from "mongoose";
import { default as BaseModel, baseOptions } from "./product";

let Schema = mongoose.Schema;

const schema = new Schema(
  {
    coffeeFlavour: {
      type: Schema.ObjectId,
      ref: "coffeeFlavour",
      required: true,
    },
    packSize: {
      type: Schema.ObjectId,
      ref: "packSize",
      required: true,
    },
  },
  baseOptions
);

// Makes Pod extend product model
export default BaseModel.discriminator("pod", schema);
