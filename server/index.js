import express from "express";
import cors from "cors";
import { generateHTMLCompletion } from "./helper.js";
import "dotenv/config";
const port = 4040;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", async (req, res) => {
  const text = req.query.text;
  const result = await generateHTMLCompletion(text);
  res.json({
    html: result,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
