import React,{useState,useEffect,useRef} from 'react';   //Add useRef for auto scroll
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Message from "./Message";
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

  const [input,setInput]= useState('');
  const [messages,setMessages]=useState([]);
  const [username,setUsername]=useState('');

  //useState= variable in REACT
  //useEffect=run code on a condition in logic
  useEffect(() => {
    //run once when app loads
    db.collection('messages')
    .orderBy('timestamp')
    .onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
    })
  }, [])

  // Line1 for auto scroll
  const messagesEndRef = useRef(null)

  //line 2 for auto scroll
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  //line 3 for auto scroll
  useEffect(scrollToBottom, [messages]);


  useEffect(() => {
    //run code here
    setUsername(prompt('Please enter your name !'));
  }, [])//conditon

  const sendMessage=(event)=>{
    //all the logic to send a message goes
      event.preventDefault();

      db.collection('messages').add({
        username:username,
        message:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })
      setInput('');
  }

  return (
    <div className="App">
      {/* input field */}
      <img src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=80&h=80"/>
    <h3>Welcome {username} to MESSENGER &#128516;</h3>

    <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="input__app" placeholder="Enter a message..." value={input} onChange={event=>setInput(event.target.value)}/>

          <IconButton className="IconBtn" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon/>
          </IconButton>

        </FormControl>
    </form>
      {/* buttons */}
      <FlipMove>
        {
          messages.map(({id,message})=>(
            <Message key={id} username={username} message={message}/>
          ))
        }
      </FlipMove>
      
      <div ref={messagesEndRef} />
    </div>
  );
}

export default App;
