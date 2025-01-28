require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path")

const connectDb = require("./utils/db");

const PORT = process.env.PORT || 8000;

app.use(express.json());

if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/dist"))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
