import React, { useState } from 'react'
import quotes from "../quotes.json"

const QuoteBox = ({index}) => {


    return (
            <div className='card'>
                <p className='quoteText'><i className="quoteIcon fa-solid fa-quote-left"></i> {quotes[index].quote} <i class="fa-solid fa-quote-right"></i></p>
                <p className='quoteAuthor'>{quotes[index].author} </p>
                          
            </div>
    );
};

export default QuoteBox;