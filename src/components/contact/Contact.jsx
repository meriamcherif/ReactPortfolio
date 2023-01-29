import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsFacebook,BsGithub} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className="contact__options">
      <article className='contact__option'>
        <MdEmail className='contact__option-icon'/>
        <h4> Email </h4>
        <h5>meriamcherif15@gmail.com</h5>
        <a href="mailto:meriamcherif15@gmail.com" target="_blank">Send a message</a>
      </article>
      <article className='contact__option'>
        <BsFacebook className='contact__option-icon'/>
        <h4> Facebook </h4>
        <h5>Meriam Cherif</h5>
        <a href="https://www.facebook.com/mariem.cherif.1420/" target="_blank">Send a facebook message</a>
      </article>
      <article className='contact__option'>
        <BsGithub className='contact__option-icon'/>
        <h4> Github </h4>
        <h5>Meriam Cherif</h5>
        <a href="https://github.com/meriamcherif" target="_blank">Take a look</a>
      </article>
      </div>
      {/*end of contact options*/}
      <form action="">
        <input type="text" name='name' placeholder='Your full name' required />
        <input type='email' name='email' placeholder='Your email' required/>
        <textarea name="message" rows="7" placeholder='Your message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact