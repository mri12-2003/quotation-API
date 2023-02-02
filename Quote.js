import React, { useEffect, useState } from "react";
import "./App.css";



const colors = ["#00eeee", "#800080", "##ed872d", "##bbff77", "#458b74","#436543", "#675433", "FF8B13","2DCDDF","C780FA",];
 
export default function Quote() {
  const [quote, setQuote] = useState("");
  const [bg, setbackgroundColor] = useState("");

  
  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };

  const changeBackgroundColor = () => {
    setbackgroundColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  useEffect(() => getQuote(), []);
  document.body.style.backgroundColor = bg;
  return (
    <div className="main-body"  >
      <h1>Quote !!!</h1>
      <h2>{quote.content}</h2>
      <h3>Author : {quote.author}</h3>

      <button
        className="btn"
        onClick={() => {
          getQuote();
          changeBackgroundColor();
        }}
      >
        Get Quote
      </button>
    </div>
  );
}
