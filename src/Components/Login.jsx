import React, { useState, useEffect } from 'react';
import TextToSpeech from '../Utils/TextToSpeech';
import handleSpeechRecognition from "../Utils/SpeechToText";

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    TextToSpeech("This is login page. What is your username and password?")
    handleSpeechRecognition("login");
    window.addEventListener('keydown', function (event) {
      handleSpeechRecognition("login");
    });
  })

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the username and password, e.g. send them to a server to be authenticated
    // Do something with the username and password, e.g. send them to a server to be authenticated
  };

  return (<>
    <h1 className='title-h1'>Login</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit" style={{ marginLeft: "197px" }} >Login</button>
    </form>
  </>
  );
}


export default LoginForm;
