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
  
  function ShareButton(props) {
  const shareText = '¡Mira esta frase inspiradora que encontré en mi app!';
  const shareUrl = 'https://quotes-app-carlos-montes.netlify.app/';

  const shareOnFacebook = () => {
    navigator.share({
      title: shareText,
      url: shareUrl,
    });
  };

  const shareOnTwitter = () => {
    navigator.share({
      text: shareText,
      url: shareUrl,
    });
  };

  const shareOnWhatsApp = () => {
    navigator.share({
      title: shareText,
      text: shareUrl,
    });
  };


  return (
    <>
      <div className='App' style={{ color: colors[randomColor] }}>
          <QuoteBox  index={index}  />
          <ButtonNext colors={colors} randomColor={randomColor} changeQuote={changeQuote} />
      </div>
<div>
      <button onClick={shareOnFacebook}>Compartir en Facebook</button>
      <button onClick={shareOnTwitter}>Compartir en Twitter</button>
      <button onClick={shareOnWhatsApp}>Compartir en WhatsApp</button>
    </div>
    </>
  );
};

export default App;
