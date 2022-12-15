import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {Route, Routes } from "react-router-dom";
const App =()=> {
 
    return (
      <div>
        <Navbar />
        <Routes>
          <Route exact  path="/" element={<News key="general" category="general"/>}/>
          <Route exact  path="sports" element={<News key="sports" category="sports"/>}/>
          <Route exact  path="business" element={<News key="business" category="business"/>}/>
          <Route exact  path="health" element={<News key="health" category="health"/>}/>
          <Route exact  path="entertainment" element={<News key="entertainment" category="entertainment"/>}/>
          <Route exact  path="technology" element={<News key="technology" category="technology"/>}/>
          <Route exact  path="science" element={<News key="science" category="science"/>}/>
        </Routes>
      </div>
    )
  
}
export default App