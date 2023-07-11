import React from 'react';
import '../styles/Header.css';
import image from '../assets/brBa.jpg';

function Header(props) {
    
  return (
    <nav>
        <div className='logoImage'>
            <img className='logo' src={image} alt='logo' />
            <h1 className='title'>Breaking Bad</h1>
        </div>
        <div className='scoreBest'>
            <p className='score'>Score: {props.score}</p>
        </div>
    </nav>
  );
}

export default Header;