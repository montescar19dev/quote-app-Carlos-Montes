import React from 'react';

const ButtonNext = ({colors, randomColor, changeQuote}) => {
    return (
        <div className='buttonCircle'>
            <button onClick={changeQuote} style={{ color: colors[randomColor] }}>{<i className='nextIcon fa-solid fa-angle-right'></i>}</button>
        </div>
    );
};

export default ButtonNext;