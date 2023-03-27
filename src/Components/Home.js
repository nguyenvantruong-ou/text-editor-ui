import React, { useEffect } from "react";
import handleSpeechRecognition from "../Utils/SpeechToText";
import "./css/home-style.css"
import Sharing from "./Sharing";

const Home = () => {
  useEffect(() => { 
    handleSpeechRecognition("home");
    window.addEventListener('keydown', function(event) {
      handleSpeechRecognition("home")
    });
  }, [])
  return (
    <>
      <h1 className="title-h1">Text Editor</h1>
      {/* <SpeechToText /> */}

      <div className="main-text-editor">
        <textarea id="content"></textarea>
      </div>
      <Sharing />
    </>
  );
};
export default Home;