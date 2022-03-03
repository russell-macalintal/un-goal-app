import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <h1>VOLUN-TEACH</h1>
      <ul className="nav-Links">
        <Link style={{ color: 'white' }} to="/">
          <h3>HOME</h3>
        </Link>
        <Link style={{ color: 'white' }} to="/profile">
          <h3>PROFILE</h3>
        </Link>
        <Link style={{ color: 'white' }} to="/calender">
          <h3>CALENDAR</h3>
        </Link>
        <Link style={{ color: 'white' }} to="/jobs">
          <h3>JOBS</h3>
        </Link>
      </ul>
    </nav>
  );
}
