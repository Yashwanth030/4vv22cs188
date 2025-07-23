import React, { useState } from "react";

export default function UrlForm({ onShorten }) {
  const [inputUrl, setInputUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputUrl.trim() !== "") {
      onShorten(inputUrl);
      setInputUrl("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="url-form">
      <input
        type="text"
        placeholder="Enter a long URL"
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
        required
      />
      <button type="submit">Shorten</button>
    </form>
  );
}
