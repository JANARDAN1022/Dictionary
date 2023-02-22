import React,{useRef,useEffect} from 'react';
import '../index.css';



const Search = ({ word, setWord, onKeyDown }) => {
  
  const inputRef = useRef(null);
    
    useEffect(()=>{
      inputRef.current.focus();
    },[]);
    
  
  return (
    <div className='main'>
      <h1 className="head">ENGLISH DICTIONARY</h1>
      <input value={word} ref={inputRef} onChange={(e) => setWord(e.target.value)} onKeyDown={onKeyDown} className='input' type="text" placeholder='Search for a Word' />
      <p>Type a Word and press enter</p>
      <p>{"(takes some time to load the first meaning so pls wait)"}</p>
    </div>
  );
};

export default Search;
