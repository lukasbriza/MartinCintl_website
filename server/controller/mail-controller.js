import express from "express";

const mailRouter = express.Router();

mailRouter.post("/post", (req, res) => {
  console.log("mail post");
});

export { mailRouter };
