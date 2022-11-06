import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
    
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<News pageSize={5} country="in" category="general" />}
            />
            <Route
              exact
              path="sports"
              element={<News pageSize={5} country="in" category="sports" />}
            />
            <Route
              exact
              path="entertainment"
              element={
                <News pageSize={5} country="in" category="entertainment" />
              }
            />
            <Route
              exact
              path="health"
              element={<News pageSize={5} country="in" category="health" />}
            />
            <Route
              exact
              path="technology"
              element={<News pageSize={5} country="in" category="technology" />}
            />
            <Route
              exact
              path="science"
              element={<News pageSize={5} country="in" category="science" />}
            />
            <Route
              exact
              path="business"
              element={<News pageSize={5} country="in" category="business" />}
            />
            <Route
              exact
              path="debug"
              element={<h1>Hi there</h1>}
            />
          </Routes>
        </div>
    );
  }
}
