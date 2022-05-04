import express from "express";
import Job from "./jobs.js";
const router = new express.Router();

router.get("/job", (req, res) => {
  Job.find({}, { __v: 0, created_at: 0, updated_at: 0 })
    .then((jobs) => {
      res.send(jobs);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
router.get("/latest-job", (req, res) => {
  Job.findOne({}, { jobNo: 1, _id: 0 })
    .sort({ field: "asc", _id: -1 })
    .then((jobs) => {
      res.send(jobs);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
router.post("/job", (req, res) => {
  const job = new Job(req.body);
  job
    .save()
    .then((job) => {
      res.status(201).send(job);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});
router.patch("/job", (req, res) => {
  const job = new Job(req.body);
  Job.findByIdAndUpdate(job._id, job, (err, docs) => {
    if (err) return res.status(500).send(err);
    res.send(docs);
  });
});

export default router;
