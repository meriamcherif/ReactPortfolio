import React from 'react'
import './about.css'
import me from "../../assets/meriam.jfif"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'
const About = () => {
  return (
    <section id="about">
      <h5> Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
           <div className='about__me'>
            <div className="about__me-image">
               <img src={me} alt="about meriam"/>
            </div>
           </div>

           <div className="about__content">
              <div className="about__cards">
                <article className='about__card'>
                   <FaAward className='about__icon'/>
                   <h5>Experience</h5>
                   <small>3+ Years Working</small>     
                </article>
                <article className='about__card'>
                   <FiUsers className='about__icon'/>
                   <h5>Clients</h5>
                   <small>200+ clients Worldwide</small>     
                </article>
                <article className='about__card'>
                   <BsFolderCheck className='about__icon'/>
                   <h5>Projects</h5>
                   <small>80+ completed projects</small>     
                </article>
              </div>
              <p>
                Meriam Cherif is a talented and innovative IT engineering student at INSAT, familiar with modern technologies, motivated to learn, prosper and excel in the field of software development, hardworking and resourceful individual commitment to building user-friendly, functional and sustainable web applications.
              </p>
              <a href="#contact" className='btn btn-primary'> Let's Talk</a>

           </div>
      </div>
    </section>
  )
}

export default About