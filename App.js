// import React, { useEffect, useState } from "react";
// import "./App.css";
// export default function App() {
//   const [quote, setQuote] = useState("");
//   const [bg, setbackgroundColor] = useState("");

//   const colors = ["#00eeee", "#800080", "##ed872d", "##bbff77", "#458b74"];

//   const getQuote = () => {
//     fetch("https://api.quotable.io/random")
//       .then((response) => response.json())
//       .then((data) => setQuote(data));
//   };

//   const changeBackgroundColor = () => {
//     setbackgroundColor(colors[Math.floor(Math.random() * colors.length)]);
//   };

//   useEffect(() => getQuote(), []);
//   return (
//     <div className="main-body" style={{ backgroundColor: bg }}>
//       <h1>Quote !!!</h1>
//       <h2>{quote.content}</h2>
//       <h3>Author : {quote.author}</h3>

//       <button
//         className="btn"
//         onClick={() => {
//           getQuote();
//           changeBackgroundColor();
//         }}
//       >
//         Get Quote
//       </button>
//     </div>
//   );
// }

















import React from 'react'
import Quote from './Quote'
export default function 
App() {
  return (
    <div>
      <Quote />
    </div>
  )
}

