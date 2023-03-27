import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './Components/Home';

import Login from './Components/Login';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sign-in" element={<Login />}></Route>
    </Routes>
      
    <Footer/>
    </>
  );
}

export default App;
