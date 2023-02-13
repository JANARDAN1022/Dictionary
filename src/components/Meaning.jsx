import React from 'react';
import '../index.css'

const Meaning = (props) => {
  const { word, result, setWord,setResult } = props;

  const onClearClick=()=>{
     setWord('');
     setResult('');
  }

  return (
    <div className='main'>
      <h1 className="head">ENGLISH DICTIONARY</h1>
      <input value={word} onChange={(e) => setWord(e.target.value)} onKeyDown={props.onKeyDown} className='input' type="text" placeholder='Search for a Word' />
      <button onClick={onClearClick} className='CLEAR'>CLEAR</button>
      <div className='result'>
        <p>YOUR WORD : <span className='span'>{word}</span></p>
        <p>MEANING : <span className='span2'>{result}</span></p>
      </div>
    </div>
  );
};

export default Meaning;
