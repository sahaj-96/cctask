const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/app_name/api/message", (req, res) => {
  res.json({ message: "Trying WebD first time."});
});

app.get("/app_name/api/users", (req, res) => {
  res.json([
    { id: 1, name: "I am a chill guy." },
    { id: 2, name: "yeshu di balle balle." },
    { id: 3, name: "ToDo List Kalesh Done." },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/app_name/`);
});
