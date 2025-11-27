import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about from '../../assets/about.png'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

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

    const skills = [
        { name: 'HTML & CSS', level: 50 },
        { name: 'Javascript', level: 70 },
        { name: 'Bootstrap', level: 60 },
        { name: 'Tailwind', level: 70 },
        { name: 'ReactJs', level: 70 },
        { name: 'NodeJs', level: 60 },
        { name: 'ExpressJS', level: 60 },
        { name: 'Gsap', level: 80 },
        { name: 'MongoDB', level: 70 }
    ];

    return (
        <motion.div
            id="about"
            className='about'
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.div className='about-title' variants={itemVariants}>
                <h1>About me</h1>
                <img src={theme_pattern} alt='Theme Pattern' />
            </motion.div>

            <div className="about-sections">
                <motion.div
                    className='about-left'
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                >
                    <img src={about} alt='About Profile' />
                </motion.div>

                <div className='about-right'>
                    <motion.div className='about-para' variants={itemVariants}>
                        <p>As a recent graduate with a keen interest in web development, I've honed my skills through internships and personal projects</p>
                        <p>My journey has equipped me with a solid foundation in HTML, CSS, JavaScript, and various frameworks.</p>
                    </motion.div>

                    <motion.div className='about-skills' variants={itemVariants}>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className='about-skill'
                                initial={{ opacity: 0, x: -50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ x: 10 }}
                            >
                                <p>{skill.name}</p>
                                <div className="skill-bar-container">
                                    <motion.hr
                                        style={{ width: `${skill.level}%` }}
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                        transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <motion.div
                className='about-achivements'
                variants={containerVariants}
            >
                <motion.div
                    className='about-achivement'
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -10 }}
                >
                    <h1>5+</h1>
                    <p>Project Completion</p>
                </motion.div>
                <hr />
                <motion.div
                    className='about-achivement'
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -10 }}
                >
                    <h1>2</h1>
                    <p>Internships</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
