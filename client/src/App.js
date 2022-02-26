import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Calender from './components/Calender';
import Registration from './components/Registration';
import Dashbord from './components/Dashbord';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/calender" element={<Calender />} />
          <Route exact path="/jobs" element={<Dashbord />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
