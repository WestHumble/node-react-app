import express from "express";
import { getStatus } from "./status/get.status";
import { postUser } from "./user/post.user";

const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
// home page
router.get("/", (req, res) => {
  res.send("Example home page");
});
// Status
router.get("/api/status", getStatus);
export default router;

router.post("/api/user", postUser);
