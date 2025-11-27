import React, { useRef } from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { motion, useInView } from 'framer-motion'

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      id="services"
      className='services'
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className='services-title'
        variants={cardVariants}
      >
        <h1>MY Services</h1>
        <img src={theme_pattern} alt='Theme Pattern' />
      </motion.div>

      <motion.div
        className='services-container'
        variants={containerVariants}
      >
        {Services_Data.map((service, index) => (
          <motion.div
            key={index}
            className='service-format'
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <motion.div
              className='services-readmore'
              whileHover={{ x: 5 }}
            >
              <p>Read More</p>
              <img src={arrow_icon} alt='Arrow Icon' />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
