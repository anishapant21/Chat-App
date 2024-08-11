const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")

const app = express();
dotenv.config()
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." });
});

app.get("/api/chats", async (req, res) => {
return res.send("Hello")
});

const PORT = process.env.PORT || 5005
app.listen(PORT);