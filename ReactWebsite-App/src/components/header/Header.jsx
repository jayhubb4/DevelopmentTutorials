import React from 'react-dom'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, I am</h5>
        <h1>Jonathan L. Hubbard</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

      </div>
    </header>
  )
}

export default Header