import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="nav">
                    <Link to="/" className="link">Home</Link>
                    <Link to="/photography" className="link">Photography</Link>
                </div>

            </div>
        );
    }
}