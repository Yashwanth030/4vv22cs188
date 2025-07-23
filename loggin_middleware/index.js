const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const LOG_FILE = "logs.json";

const saveLogToFile = (log) => {
  const logs = fs.existsSync(LOG_FILE)
    ? JSON.parse(fs.readFileSync(LOG_FILE))
    : [];
  logs.push({ ...log, timestamp: new Date().toISOString() });
  fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));
};

app.post("/evaluation-service/logs", (req, res) => {
  const { longUrl, shortUrl } = req.body;

  if (!longUrl || !shortUrl) {
    return res.status(400).json({ error: "Missing longUrl or shortUrl" });
  }

  const logEntry = {
    longUrl,
    shortUrl,
    timestamp: new Date().toISOString(),
  };

  console.log("Log received:", logEntry);

  saveLogToFile(logEntry);

  res.status(200).json({ message: "Log saved successfully" });
});

app.get("/", (req, res) => {
  res.send("Logging middleware is running.");
});

app.listen(PORT, () => {
  console.log(`Logging middleware server is running at http://localhost:${PORT}`);
});
