import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [myname, setMyName] = useState('')
  const [message, setMessage] = useState('')

//calling my name from BE, server.js 
const callBackEnd = async () => {
  const response = await fetch('/api/myname');
  const data = await response.json();
  console.log(data);
  setMyName(data.name)

};
//calling message from BE, server.js 
const callForMessage = async () => {
  const response = await fetch('/api');
  const data= await response.json();
  console.log(data);
  setMessage(data.message)

};

useEffect(() => {
  callBackEnd();
  callForMessage();
}, []);

  return (
    <>
      <div>
        <h1> Weather Forecast App </h1>
        <h5> City: {myname} </h5> 
        <h5> Description: {message}  </h5> 
        
  
      </div>
    </>
  )
}

export default App
