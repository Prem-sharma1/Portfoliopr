import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <motion.div
      id="home"
      className='hero'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src={profile}
        alt='Profile'
        variants={imageVariants}
        animate={floatingAnimation}
        className='hero-profile-img'
      />

      <motion.h1 variants={itemVariants}>
        <span>I'm Prem Sharma,</span> Full Stack Web Developer based in India
      </motion.h1>

      <motion.p variants={itemVariants}>
        I am a full stack developer from Rajasthan, I am a fresher with passion for creating modern web applications
      </motion.p>

      <motion.div
        className='hero-action'
        variants={itemVariants}
      >
        <motion.div
          className='hero-connect'
          whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(235, 118, 9, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          <AnchorLink className='anchor-link' offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </motion.div>

        <motion.div
          className='hero-resume'
          whileHover={{ scale: 1.05, borderColor: "#B415FF" }}
          whileTap={{ scale: 0.95 }}
        >
          My Resume
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Hero
