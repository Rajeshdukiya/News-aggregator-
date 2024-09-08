import { useState } from "react";
import "./App.css";
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import ArticlePage from "./Pages/ArticlePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loader from "./Pages/Loader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/article/:id" element={<ArticlePage/>} />
        <Route path="*" element={<Loader/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
