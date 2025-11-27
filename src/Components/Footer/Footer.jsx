import React, { useRef } from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import { motion, useInView } from 'framer-motion'

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      className='footer'
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="footer-top">
        <motion.div className="footer-top-left" variants={itemVariants}>
          <p>I am a full-stack developer from India, with 5+ projects and 2 internships</p>
        </motion.div>

        <motion.div className="footer-top-right" variants={itemVariants}>
          <div className="footer-email-input">
            <img src={user_icon} alt='User Icon' />
            <input type='email' placeholder='Enter your email' />
          </div>
          <motion.div
            className='footer-subscribe'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.div>
        </motion.div>
      </div>

      <hr />

      <div className='footer-bottom'>
        <motion.p className='footer-bottom-left' variants={itemVariants}>
          © 2024 Prem Sharma. All rights reserved
        </motion.p>

        <motion.div className='footer-bottom-right' variants={containerVariants}>
          {['Term of Service', 'Privacy policy', 'Connect with me'].map((item, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2, color: "#eb7609" }}
              style={{ cursor: 'pointer' }}
            >
              {item}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Footer
