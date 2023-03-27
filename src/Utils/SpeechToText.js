import React, { useState, useEffect } from 'react';

// function SpeechToText() {
  // const [transcript, setTranscript] = useState('');

  const handleSpeechRecognition = (page) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = 50000;

    // recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      handling(result)
    };

    recognition.onerror = (event) => {
      console.error(event.error);
    };

    recognition.start();

    const handling = (text) => {
      document.getElementById("content").value += text
      if(text.search("login") > 0 || text.search("sign in") > 0  || text.search("đăng nhập") > 0)
      window.location.href = '/sign-in';  

      //login
      if (page === "login"){
        alert(text)
        const words = text.slice(text.indexOf("username") + 12).split(" ");
        const username = words[0];
        // var username = text.slice(text.indexOf("username") + 12, text.indexOf("pass") - 4);
        document.getElementById("username").value = username;
        var pw = text.slice(text.indexOf("pass") + 12);
        document.getElementById("password").value = pw;
      }
    }
  };

  
  // return (
  //   <div>
  //     <button onClick={handleSpeechRecognition}>Start Speech Recognition</button>
  //     <p>{transcript}</p>
  //   </div>
  // );
// }

// export default SpeechToText
export default handleSpeechRecognition