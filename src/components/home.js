import React from 'react';
import './components.css';
import Img from '../assets/Sundar_pic.JPG'
import { motion } from "motion/react";

export default function Home(){



    return(
        <>
           <div id='/' className='Home'>
                <div className='Sundar'>
                    <img src={Img} alt='Sundar S'/>
                </div>
                <div className='intro'> 
                    <h3>hi, i am sundar.</h3>
                    <h1>A passionate developer based in Bangalore</h1>
                    <p>Web developer crafting responsive, user-friendly websites.
                        Focused on clean code, performance, and great user experience.</p>
                    <div className="buttons">
                        <motion.button 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }}
                         >Got a project?</motion.button>
                        <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        >lets talk!</motion.button>
                    </div>
                </div>
           </div>
         
                <div className="marquee">
                    <div className="marquee-content">
                        <h3>This is a modern marquee effect using CSS animations!</h3> 
                    </div>
                </div>
    
        </>
    )
}