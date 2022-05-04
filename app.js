import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jobRouter from "./routes/jobRouter.js";
const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
mongoose.Promise = global.Promise;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.connect(process.env.MONGO_URL || process.env.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});
app.use(jobRouter);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
