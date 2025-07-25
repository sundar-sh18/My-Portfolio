// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import './nav.css';
import {Link} from 'react-router-dom';

export default function Nav(){




    return(
        <>
        <nav>
            <div className="logo">
               <Link to='/'>
                    <FontAwesomeIcon icon={faImage} />
               </Link>
            </div>
            <div className="navi">
               <Link to='/'>home</Link>
               <Link to='/about'>projects</Link>
               <Link to='/'>resume</Link>
               <Link to='/'>skills</Link>
               <Link to='/'>contact</Link>
            </div>
            <div className="icons"> 
               <Link to='/'>
                    <FontAwesomeIcon icon={faGithub} />
               </Link>
                
               <Link to='/'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
               </Link>
               
               <Link to='/'>
                    <FontAwesomeIcon icon={faWhatsapp} />
               </Link>
               <Link to='/'>
                    <FontAwesomeIcon icon={faInstagram} />
               </Link>
            
            </div>
        </nav>
            
        </>
    )
}