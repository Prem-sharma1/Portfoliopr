import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about from '../../assets/about.png'
const About = () => {
  return (
    <div id="about" className='about'>
   <div className='about-title'>
    <h1>About me</h1>
    <img src={theme_pattern} alt=''/>
   </div>
   <div className="about-sections">
       <div className='about-left'>
        <img src={about} alt=''/>
       </div>
       <div className='about-right'>
        <div className='about-para'>
            <p>As a recent graduate with a keen interest in web development, I`ve honed my skills through internships and personal projects</p>
            <p>My journey has equipped me with a solid foundation in HTML, CSS, JavaScript, and various frameworks.</p>
        </div>
        <div className='about-skills'>
            <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%" }}/></div>
            <div className='about-skill'><p>Javascript</p><hr style={{width:"70%" }}/></div>
            <div className='about-skill'><p>Bootstrap</p><hr style={{width:"60%" }}/></div>
            <div className='about-skill'><p>Tailwind</p><hr style={{width:"70%" }}/></div>
            <div className='about-skill'><p>ReactJs</p><hr style={{width:"70%" }}/></div>
            <div className='about-skill'><p>NodeJs</p><hr style={{width:"60%" }}/></div>
            <div className='about-skill'><p>ExpressJS</p><hr style={{width:"60%" }}/></div>
            <div className='about-skill'><p>Gsap</p><hr style={{width:"80%" }}/></div>
            <div className='about-skill'><p>MongoDB</p><hr style={{width:"70%" }}/></div>
        </div>
       </div>
   </div>
   <div className='about-achivements'>
    <div className='about-achivement'>
        <h1>5+</h1>
        <p>Project Completion</p>
    </div>
    <hr/>
    <div className='about-achivement'>
        <h1> 2 </h1>
        <p>internships</p>
    </div>
   </div>
    </div>
  )
}

export default About
