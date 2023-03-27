// import React, { useEffect } from "react";

const TextToSpeech = (text) => {  

  // var synthesis = window.speechSynthesis;
  // // const speak = () => {
  //   var utterance = new SpeechSynthesisUtterance(text);
  //   synthesis.speak(utterance); 
// Lấy danh sách các giọng nói có sẵn trên máy tính

const utterance = new SpeechSynthesisUtterance(text);
utterance.lang = 'en-US'; // Chọn giọng Anh
utterance.rate = 0.8; // Điều chỉnh tốc độ đọc

speechSynthesis.speak(utterance);

                       
};


export default TextToSpeech