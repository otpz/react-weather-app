import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-div'>
            <span>This weather app building by <a className='name-link' href="https://github.com/otpz" target={'_blank'} rel="noreferrer">Osman Topuz</a></span> |
            <a href='https://github.com/otpz' target={'_blank'} rel="noreferrer">Github<FontAwesomeIcon icon={faGithub}/></a > |
            <a href='https://www.linkedin.com/in/osman-topuz-988104218/' target={'_blank'} rel="noreferrer">Linkedin<FontAwesomeIcon icon={faLinkedin}/></a >
        </div>
    </footer>
  )
}

export default Footer