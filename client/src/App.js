import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Route exact path="/" component={Home} />
        </>
      </Router>
    </div>
  );
}

export default App;
