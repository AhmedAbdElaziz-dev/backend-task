import mongoose from "mongoose";
import { default as BaseModel, baseOptions } from "./product";

let Schema = mongoose.Schema;

const schema = new Schema(
  {
    waterLine: {
      type: Boolean,
      required: true,
    },
    machineModel: {
      type: Schema.ObjectId,
      ref: "machineModel",
      required: true,
    },
  },
  baseOptions
);

// Makes Machine extend product model
export default BaseModel.discriminator("machine", schema);
