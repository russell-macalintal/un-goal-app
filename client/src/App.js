import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Calender from './components/Calender';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import Home from './components/Home'
import SignUp from './components/SignUp';

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
          <Route exact path="/jobs" element={<Dashboard />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
