import React, { useState } from 'react';

const Quote = () => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const handleQuoteChange = (event) => {
    setText(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`"${text}" - ${author}`);
    setText('');
    setAuthor('');
  };

  return (
    <div>
      <h1>Get a Quote</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="quote-text">Quote Text:</label>
          <input
            type="text"
            id="quote-text"
            value={text}
            onChange={handleQuoteChange}
            required
          />
        </div>
        <div>
          <label htmlFor="quote-author">Quote Author:</label>
          <input
            type="text"
            id="quote-author"
            value={author}
            onChange={handleAuthorChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Quote;
