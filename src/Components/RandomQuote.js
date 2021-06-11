import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { IconContext } from "react-icons";

const RandomQuote = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    axios("https://api.quotable.io/random").then((res) => {
      const newResult = res.data;
      setQuote(newResult);
    });
  }, []);

  const handleClick = () => {
    axios.get("https://api.quotable.io/random").then((res) => {
      const newQuote = res.data;
      setQuote(newQuote);
    });
  };

  return (
    <div id="wrapper">
      <div id="quote-box">
        <div id="text">
          <FaQuoteLeft /> {quote.content} <FaQuoteRight />
        </div>
        <div id="author">~ {quote.author}</div>
        <div id="new-quote">
          <button onClick={handleClick}>New Quote</button>
        </div>
        <IconContext.Provider value={{ size: "2em", className: "react-icons" }}>
          <div id="twitterIcon">
            <a
              href={`https://twitter.com/intent/tweet?text=${quote.content}--${quote.author}`}
              title="Tweet my quote"
            >
              <FiTwitter />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default RandomQuote;
