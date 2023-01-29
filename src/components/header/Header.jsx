import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/mee.png'
import HeaderSocial from './HeaderSocials'
const Header = () => {
  return (
    <div>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Meriam Cherif</h1>
        <h5 className="text-light">Fullstack Developer</h5>
      <CTA/>
      <HeaderSocial/>
      <a href="#contact" className="scroll__down">Scroll Down</a>

      <div className="me">
        <img src={me} alt="me" />
      </div>

      </div>
    </div>
  )
}

export default Header