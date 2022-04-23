import React from 'react'
import './Contact.css'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <>
        <div className='contacto'>
        <motion.div  id='contact' className="containeer">  
                      <a className='links' href="https://www.instagram.com/neltaffarel/" target="_blank">
                      <motion.i 
                      whileHover={{ scale: 1.5}}
                      whileTap={{ scale: 1.4}}
                      className="fa-brands fa-instagram"></motion.i>
                      </a>
                      <a className='links' href="https://vimeo.com/nelsontaffarel" target="_blank">
                      <motion.i 
                      whileHover={{ scale: 1.5}}
                      whileTap={{ scale: 1.4}}
                      className="fa-brands fa-vimeo-v"></motion.i>
                      </a>
        </motion.div>
        </div>
        <p className='linkedin'>Hecho por <a href="http://www.linkedin.com/in/ignacio-haffner-3965b017a/" target="_blank" rel="noopener noreferrer">IGNACIO HAFFNER</a></p>           
    </>
  )
}

export default Contact