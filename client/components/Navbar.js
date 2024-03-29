import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div id="top">
            <ul id="nav">
                <li>
                    <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Home</Link>
                </li>
                <li>
                    <Link to="/map" style={{ textDecoration: 'none', color: '#fff' }}>Map View</Link>
                </li>
            </ul>
        </div>
    );
}
