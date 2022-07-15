import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './Navbar.css'


//BEM -> Block Element Modifier (ex. the class naming convention I am using below. See how similar they are?)

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is GPT3</a></p>
          <p><a href='#possibilty'>Open AI</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar