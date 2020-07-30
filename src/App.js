import React from 'react';
import './App.css';

function App() {

  const [input,setInput]= useState('');

  return (
    <div className="App">
      {/* input field */}

      <input value={input} onChange={event=>setInput(event.target.value)}/>
      <button>Send message</button>
      {/* buttons */}
      {/* message themselves */}

    </div>
  );
}

export default App;
