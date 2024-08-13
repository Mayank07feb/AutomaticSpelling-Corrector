import React, { useState } from 'react';
import useSpellingCorrection from '../hooks/useSpellingCorrection';
import './TextInput.css';

const TextInput = () => {
  const [text, setText] = useState('');
  const { correctedText } = useSpellingCorrection(text);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="text-input-container">
      <h1>Spelling Checker</h1>
      <textarea
        className="text-input"
        value={text}
        onChange={handleChange}
        placeholder="Type your text here..."
        rows="10"
      />
      <div className="corrected-text">
        <h2>Corrected Text</h2>
        <p>{correctedText}</p>
      </div>
    </div>
  );
};

export default TextInput;