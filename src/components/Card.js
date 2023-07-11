import React from 'react';
import '../styles/Card.css';
//import img from '../assets/brBa.jpg';

function Card(props) {
    
  const sourceLink= props.img;

  const styles={
    backgroundColor: props.isChosen? "#59E391" : "gray"
  }
  
  return (
        <div className='box' onClick={() => props.onClick(props.id)} style={styles}>
            <img className='image' src={sourceLink} />
            <p className='name'>{props.name}</p>
        </div>
    
  );
}

export default Card;