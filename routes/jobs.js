import mongoose from "mongoose";
const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    jobNo: { type: String, require: true, unique: true },
    date: String,
    customerName: String,
    companyName: String,
    currentStatus: String,
    done: Boolean,
    mobileNo: String,
    material: String,
    accessories: [String],
    brand: String,
    modelNo: String,
    srNo: String,
    password: String,
    problem: String,
    estimate: String,
    receivedBy: String,
    repairedBy: String,
    remark: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;
