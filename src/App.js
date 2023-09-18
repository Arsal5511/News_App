// import './App.css';


import { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 6;
  const country = 'in';
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)
  const [mode , setMode] = useState('light') 
  const [text, setText] = useState('Light Mode')
  
  const toggleMode = () => {
    if (mode === "light" ) {
      setMode("dark");
      setText ("Dark Mode");
      document.body.style.backgroundColor = "grey";
      document.title = "KhabarWala - Dark Mode";   
      
      
      
    } else {
      setMode("light");
      setText ("Light Mode");
      document.body.style.backgroundColor = "white";
      document.title = "KhabarWala - Light Mode";
    }
  };
  
  return (
    <div>
      <BrowserRouter>
        <NavBar mode={mode} toggleMode={toggleMode}  text = {text} />
        <LoadingBar height={5} color='#f11946' progress={progress} />
        <Routes>
          <Route exact path="/" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />}></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country={country} category="business" />}></Route>
          <Route exact path="/entertainment" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />}></Route>
          <Route exact path="/general" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />}></Route>
          <Route exact path="/health" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health" />}></Route>
          <Route exact path="/science" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" />}></Route>
          <Route exact path="/sports" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" />}></Route>
          <Route exact path="/technology" element={<News mode={mode} setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology" />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )

}

export default App