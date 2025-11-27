import React, { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
   const [menu, setMenu] = useState("home");
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const menuRef = useRef();
   
   const openMenu = () => {
     menuRef.current.style.right = "0";
     setIsMobileMenuOpen(true);
   }
   
   const closeMenu = () => {
     menuRef.current.style.right = "-350px";
     setIsMobileMenuOpen(false);
   }
   
   const navbarVariants = {
     hidden: { y: -100, opacity: 0 },
     visible: { 
       y: 0, 
       opacity: 1,
       transition: {
         type: "spring",
         stiffness: 100,
         damping: 20,
         staggerChildren: 0.1
       }
     }
   };
   
   const menuItemVariants = {
     hidden: { opacity: 0, x: -20 },
     visible: { 
       opacity: 1, 
       x: 0,
       transition: { duration: 0.3 }
     }
   };
   
   const mobileMenuVariants = {
     closed: { x: "100%", opacity: 0 },
     open: { 
       x: 0, 
       opacity: 1,
       transition: {
         type: "spring",
         stiffness: 100,
         damping: 20,
         staggerChildren: 0.08,
         delayChildren: 0.1
       }
     },
     exit: {
       x: "100%",
       opacity: 0,
       transition: { duration: 0.3 }
     }
   };
   
   const menuItems = [
     { name: "home", label: "Home", href: "#home", offset: 0 },
     { name: "about", label: "About Me", href: "#about", offset: 50 },
     { name: "services", label: "Service", href: "#services", offset: 50 },
     { name: "work", label: "Portfolio", href: "#work", offset: 50 },
     { name: "contact", label: "Contact", href: "#contact", offset: 50 }
   ];
   
   return (
     <motion.div 
       id="navbar" 
       className='navbar'
       variants={navbarVariants}
       initial="hidden"
       animate="visible"
     >
       <motion.h1
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5, type: "spring" }}
       >
         PREM
       </motion.h1>
       
       <motion.img 
         src={menu_open} 
         onClick={openMenu}  
         className='nav-mob-open' 
         alt='Open Menu'
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
       />
       
       <ul ref={menuRef} className='nav-menu'>
         <img 
           src={menu_close} 
           onClick={closeMenu}  
           className='nav-mob-close'
           alt='Close Menu'
         />
         
         {menuItems.map((item, index) => (
           <motion.li 
             key={item.name}
             variants={menuItemVariants}
             whileHover={{ y: -2 }}
           >
             <AnchorLink 
               className='anchor-link' 
               offset={item.offset} 
               href={item.href}
               onClick={() => {
                 setMenu(item.name);
                 if (window.innerWidth <= 768) closeMenu();
               }}
             >
               <p>{item.label}</p>
             </AnchorLink>
             <AnimatePresence>
               {menu === item.name && (
                 <motion.img 
                   src={underline}
                   alt=''
                   initial={{ opacity: 0, scale: 0.5 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.5 }}
                   transition={{ duration: 0.2 }}
                 />
               )}
             </AnimatePresence>
           </motion.li>
         ))}
       </ul>
       
       <motion.div 
         className='nav-connect'
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         initial={{ opacity: 0, x: 50 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ delay: 0.3 }}
       >
         <AnchorLink className='anchor-link' offset={50} href="#contact">
           Connect With Me
         </AnchorLink>
       </motion.div>
     </motion.div>
   )
}

export default Navbar
