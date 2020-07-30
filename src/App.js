import React,{useState} from 'react';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Message from "./Message";
import './App.css';

function App() {

  const [input,setInput]= useState('');

  const [messages,setMessages]=useState(['Hi everyone!']);

  const sendMessage=(event)=>{
    //all the logic to send a message goes
      event.preventDefault();
      setMessages([...messages,input]);
      setInput('');
  }

  return (
    <div className="App">
      {/* input field */}


    <form>

        <FormControl>
          <InputLabel htmlFor="my-input">Enter a message...</InputLabel>
          <Input value={input} onChange={event=>setInput(event.target.value)}/>
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send message</Button>
        </FormControl>
    </form>
      {/* buttons */}

      {
        messages.map(message=>(
          <Message text={message}/>
        ))
      }
      {/* message themselves */}

    </div>
  );
}

export default App;
