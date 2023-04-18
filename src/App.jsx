import React, { useState } from 'react';
import "./styles.css";
import quotes from "./quotes.json"
import QuoteBox from './components/QuoteBox';
import ButtonNext from './components/ButtonNext';



function App() {

  console.log(quotes);

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(randomIndex)

  const changeQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setIndex(randomIndex)
  }

  const colors = ['#593e85', '#D65DB1', '#b85a9b', '#c7603c', '#bd8317', '#99982c'];
  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColor]}`



  return (
    <>
<div className='quoteContainer'>
    <QuoteBox index={index} />
    <ButtonNext colors={colors} randomColor={randomColor} changeQuote={changeQuote} />
</div>
    </>
  );
};

export default App;
