import React from 'react'
import './Hero.css'
import profile from'../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id="home" className='hero'>
    <img src={profile} alt=''/>
         <h1><span>I`m Prem Sharma,</span>Full Stack Web Developer based on india</h1>
         <p>I am a full stack developer from rajathan,i am a fresher</p>
         <div className='hero-action'>
          <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href="#contact">Connect With ME</AnchorLink></div>
          <div className='hero-resume'>My-Resume</div>
         </div>
         
        </div>
  )
}

export default Hero
