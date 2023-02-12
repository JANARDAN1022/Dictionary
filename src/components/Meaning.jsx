import React from 'react';
import '../index.css'

const Meaning = (props) => {
  const { word, result, setWord } = props;

  return (
    <div className='main'>
      <h1 className="head">ENGLISH DICTIONARY</h1>
      <input value={word} onChange={(e) => setWord(e.target.value)} onKeyDown={props.onKeyDown} className='input' type="text" placeholder='Search for a Word' />
      <div className='result'>
        <p>YOUR WORD : <span className='span'>{word}</span></p>
        <p>MEANING : <span className='span2'>
          {result.entries && result.entries[0] && result.entries[0].sense && result.entries[0].sense[0] 
            ? result.entries[0].sense[0].definition 
            : 'No definition found'
          }
        </span></p>
      </div>
    </div>
  )
};


export default Meaning;

