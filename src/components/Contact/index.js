import React, { Component } from 'react'
import EmailIcon from './icons/email.svg'
import PhoneIcon from './icons/phone.svg'
import LocalIcon from './icons/location.svg'


import './style.css'


class Contact extends Component {

  render() {
    return (
      <div className="contact-container">
        <div className="contact-hero">
          <img src="https://s3.amazonaws.com/mariosbucket/deskPic.jpeg" alt="desk"/>
          <h5>Contact Me</h5>
        </div>
  
        <div className="contact-item">
          <a href="mailto:mk@mariokennedy.com">mk@mariokennedy.com</a>
        </div>
        <div className="contact-item">
          <a href="tel:7747221431">774-722-1431</a>
        </div>
        <div className="contact-item">
          <a 
            href="https://www.google.com/maps/place/San+Diego,+CA/@32.7549719,-117.1972497,12z/data=!4m13!1m7!3m6!1s0x80d9530fad921e4b:0xd3a21fdfd15df79!2sSan+Diego,+CA!3b1!8m2!3d32.715738!4d-117.1610838!3m4!1s0x80d9530fad921e4b:0xd3a21fdfd15df79!8m2!3d32.715738!4d-117.1610838"
            target="_blank"
          >
            San Diego, CA 92101
          </a>
        </div>
      </div>
    )
  }
}

export default Contact;