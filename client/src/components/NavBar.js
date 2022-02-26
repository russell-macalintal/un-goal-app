import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <h3>Application Name</h3>
      <ul className="nav-Links">
        <Link style={{ color: 'white' }} to="/">
          <li>Home</li>
        </Link>
        <Link style={{ color: 'white' }} to="/profile">
          <li>Profile</li>
        </Link>
        <Link style={{ color: 'white' }} to="/calender">
          <li>Calender</li>
        </Link>
        <Link style={{ color: 'white' }} to="/jobs">
          <li>Jobs</li>
        </Link>
      </ul>
    </nav>
  );
}
