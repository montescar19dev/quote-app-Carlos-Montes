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

  const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F', '#F9F871'];
  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColor]}`



  return (
    <>
      <div className='App' style={{ color: colors[randomColor] }}>
          <QuoteBox  index={index}  />
          <ButtonNext colors={colors} randomColor={randomColor} changeQuote={changeQuote} />
      </div>
    </>
  );
};

export default App;