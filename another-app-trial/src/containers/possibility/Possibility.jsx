import React from 'react';
import './Possibility.css'
import possibilityimage from '../../assets/possibility.png'

const Possibiility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityimage} alt='possibility'></img>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Can you see yourself in/with this? We can. This is now. Let this furture be a part of your past</p>
        <h4>Request Early Access to get Started</h4>
      </div>
    </div>
  )
}

export default Possibiility