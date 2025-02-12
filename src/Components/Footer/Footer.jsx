import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <p>I am full-stack developer from india,with 5+ project and 2 internships</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt=''/>
                <input type='email' placeholder='Enter the email'/>
            </div>
            <div className='footer-subscribe'>Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>© 2024 Prem Sharma.All right reserved</p>
       <div className='footer-bottom-right'>
        <p>Term of Service</p>
        <p>Privacy policy</p>
        <p>Connect with me</p>
       </div>
      </div>
    </div>
  )
}

export default Footer
