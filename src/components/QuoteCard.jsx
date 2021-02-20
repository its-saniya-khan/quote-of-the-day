import React, { useState, useEffect } from "react";
import "./../App.css";

function QuoteCard({ selectedCategory = "", category = "" }) {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch(
        `https://quotes.rest/qod?category=${category}&language=en`
      )
        .then((response) => response.json())
        .catch(() => console.log("error"));
      setQuotes(response?.contents?.quotes);
    };
    if (selectedCategory && category === selectedCategory) fetchQuote();
  }, [category, selectedCategory]);

  return (
    <>
      {quotes &&
        quotes.map((quote) => {
          console.log(quote.quote);
          return (
            <div
              key={category}
              className="quote-card"
              style={{
                backgroundImage: `url(${quote.background})`,
              }}
            >
              <p className="quote">{quote.quote}</p>
              <span className="author">-{quote.author}</span>
            </div>
          );
        })}
    </>
  );
}

export default React.memo(QuoteCard);
