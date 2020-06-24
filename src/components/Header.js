import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css';
import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';


export default function Header() {
    return (
        <header id="main-header">
            <div class="header-content">
                <Link to="/">
                    <img src={logo} alt="InstaRocket"></img>
                </Link>
                <Link to="/new">
                    <img src={camera} alt="Eviar publicação"></img>
                </Link>
            </div>
        </header>
    );
}