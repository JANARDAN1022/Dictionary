import React, { useState } from 'react';
import Search from './components/Search';
import Meaning from './components/Meaning';

const App = () => {
  const [word, setWord] = useState('');
  const [result, setResult] = useState('');

 

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '86929c5393mshe0c0804cd0e446cp1cb1c7jsncf57ab4272f4',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };
  
  const onKeyDown = async (e) => {
    if (e.key === 'Enter') {
      try {
        const response = await fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setResult(data.list[0].definition);
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
