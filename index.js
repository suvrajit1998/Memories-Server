import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

import postRouter from "./routes/posts.js";

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/post", postRouter);

app.get("/", (req, res) => {
  res.send("Hello to mepories API!");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((ex) => console.log(ex.message));

mongoose.set("useFindAndModify", false);
