import React, { useState } from 'react';
import Search from './components/Search';
import Meaning from './components/Meaning';

const App = () => {
  const [word, setWord] = useState('');
  const [result, setResult] = useState('');

  const onKeyDown = async (e) => {
    if (e.key === 'Enter') {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        setResult(data[0].meanings[0].definitions[0].definition);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      {result === '' ? (
        <Search word={word} setWord={setWord} onKeyDown={onKeyDown} />
      ) : (
        <Meaning word={word} result={result} setWord={setWord} onKeyDown={onKeyDown} />
      )}
    </div>
  );
};

export default App;
