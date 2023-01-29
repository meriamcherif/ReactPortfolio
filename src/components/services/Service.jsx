import React from 'react'
import './service.css'
import {AiOutlineCheck} from 'react-icons/ai'
const Service = () => {
  return (
    <section id="service">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li> <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li> <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li> <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li> <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li> <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li>
          </ul>
        </article> 
        {/*END of UI/Ux */}
        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a web developer </p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li> <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li> <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li> <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li> <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li> <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li>
          </ul>
        </article> 
        <article className="service">
          <div className="service__head">
            <h3>Content creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a content creator </p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li> <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li> <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li> <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li> <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li> <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p> Meriam Cherif a ui/ux designer </p>
            </li>
          </ul>
        </article> 
      </div>
    </section>
  )
}

export default Service