// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import './components.css';

export default function Nav(){




    return(
        <nav>
            <div className="logo">
               <a href='/' >
                    <FontAwesomeIcon icon={faImage} />
               </a>
            </div>
            <div className="navi">
               <a href='/' >home</a>
               <a href='#about' >about</a>
               <a href='#projects' >projects</a>
               <a href='#resume' >resume</a>
               <a href='#skills' >skills</a>
               <a href='#contact' >contact</a>
            </div>
            <div className="icons"> 
               <a href='https://github.com/sundar-sh18' target='_blank' rel="noreferrer noopener">
                    <FontAwesomeIcon icon={faGithub} />
               </a>
                
               <a href='https://www.linkedin.com/in/sundar-sh18/' target='_blank' rel="noreferrer noopener">
                    <FontAwesomeIcon icon={faLinkedinIn} />
               </a>
               
               <a href='https://wa.me/9964255131' target='_blank' rel="noreferrer noopener">
                    <FontAwesomeIcon icon={faWhatsapp} />
               </a>
               <a href='https://www.instagram.com/_s.u.n.d.a.r._.s_/' target='_blank' rel="noreferrer noopener">
                    <FontAwesomeIcon icon={faInstagram} />
               </a>
            
            </div>
        </nav>
    )
}