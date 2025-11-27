import React, { useRef, useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import { motion, useInView } from 'framer-motion'

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5b23a840-f363-497a-a61d-e664a3e47a45");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setIsSubmitted(true);
      alert("Email sent successfully!");
      event.target.reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      id="contact"
      className='contact'
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className='contact-title' variants={itemVariants}>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='Theme Pattern' />
      </motion.div>

      <div className='contact-section'>
        <motion.div className='contact-left' variants={itemVariants}>
          <h1>Let's talk</h1>
          <p>I am currently available to take new projects and have been ready and passionate about doing new internships and projects</p>

          <div className='contact-details'>
            <motion.div
              className='contact-detail'
              whileHover={{ x: 10 }}
            >
              <img src={mail_icon} alt='Email Icon' />
              <p>smartyprem@gmail.com</p>
            </motion.div>

            <motion.div
              className='contact-detail'
              whileHover={{ x: 10 }}
            >
              <img src={call_icon} alt='Phone Icon' />
              <p>+91-6375787368</p>
            </motion.div>

            <motion.div
              className='contact-detail'
              whileHover={{ x: 10 }}
            >
              <img src={location_icon} alt='Location Icon' />
              <p>Jodhpur, Rajasthan, India</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          className='contact-right'
          variants={containerVariants}
        >
          <motion.label variants={itemVariants}>Your Name</motion.label>
          <motion.input
            type='text'
            placeholder='Enter your name'
            name='name'
            required
            variants={itemVariants}
            whileFocus={{ scale: 1.02, borderColor: "#eb7609" }}
          />

          <motion.label variants={itemVariants}>E-mail</motion.label>
          <motion.input
            type='email'
            placeholder='Enter your email'
            name='email'
            required
            variants={itemVariants}
            whileFocus={{ scale: 1.02, borderColor: "#eb7609" }}
          />

          <motion.label variants={itemVariants}>Write your message here</motion.label>
          <motion.textarea
            name='message'
            cols="30"
            rows="8"
            placeholder='Enter your message'
            required
            variants={itemVariants}
            whileFocus={{ scale: 1.02, borderColor: "#eb7609" }}
          />

          <motion.button
            type="submit"
            className='contact-submit'
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={isSubmitted ? { scale: [1, 1.1, 1] } : {}}
          >
            {isSubmitted ? "Sent!" : "Submit now"}
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact
