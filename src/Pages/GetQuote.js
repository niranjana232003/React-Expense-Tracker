import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../styles/GetQuote.css";

function GetQuote() {
  const quotes = [
    "Do something today that your future self will thank you for.",
    "Small steps every day lead to big results.",
    "Don't watch the clock; do what it does. Keep going.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones."
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-page"> {/* ✅ background applied only here */}
      <div className="quote-container">
        <h2>Motivational Quote</h2>
        <p className="quote-text">"{quote}"</p>

        <div className="button-group">
          <button className="quote-btn" onClick={getNewQuote}>
            Get Another Quote
          </button>
          <Link to="/">
            <button className="back-btn">Back to Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetQuote;
