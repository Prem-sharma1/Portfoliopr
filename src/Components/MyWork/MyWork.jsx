import React, { useRef } from 'react'
import './MYWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import { motion, useInView } from 'framer-motion'

const MyWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      id='work'
      className='my-work'
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className='mywork-title'
        variants={itemVariants}
      >
        <h1>My latest work</h1>
        <img src={theme_pattern} alt='Theme Pattern' />
      </motion.div>

      <motion.div
        className='mywork-container'
        variants={containerVariants}
      >
        {mywork_data.map((work, index) => (
          <motion.div
            key={index}
            className='mywork-item'
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <img src={work.w_img} alt={work.w_name} />
            <div className='mywork-overlay'>
              <h3>{work.w_name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className='mywork-showmore'
        variants={itemVariants}
        whileHover={{ scale: 1.05, gap: "30px" }}
        whileTap={{ scale: 0.95 }}
      >
        <p>Show more</p>
        <motion.img
          src={arrow_icon}
          alt='Arrow Icon'
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  )
}

export default MyWork
