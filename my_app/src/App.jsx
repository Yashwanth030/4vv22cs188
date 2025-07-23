import React, { useState } from "react";
import UrlForm from "./components/UrlForm";
import ShortenedList from "./components/ShortenedList";
import "./App.css";

function App() {
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const handleShorten = (longUrl) => {
    const shortUrl = "http://sho.rt/" + Math.random().toString(36).substring(2, 8);
    const newEntry = { longUrl, shortUrl };
    setShortenedUrls((prev) => [newEntry, ...prev]);

    fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntry),
    }).catch((err) => console.error("Logging failed:", err));
  };

  return (
    <div className="app-container">
      <h1>URL Shortener</h1>
      <UrlForm onShorten={handleShorten} />
      <ShortenedList urls={shortenedUrls} />
    </div>
  );
}

export default App;

