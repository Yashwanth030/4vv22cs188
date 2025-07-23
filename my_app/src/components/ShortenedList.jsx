import React from "react";

export default function ShortenedList({ urls }) {
  return (
    <div className="shortened-list">
      <h2>Shortened URLs</h2>
      <ul>
        {urls.map((item, index) => (
          <li key={index}>
            <p>
              Original: <a href={item.longUrl} target="_blank" rel="noreferrer">{item.longUrl}</a>
            </p>
            <p>
              Short: <a href={item.longUrl} target="_blank" rel="noreferrer">{item.shortUrl}</a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
