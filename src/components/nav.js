// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
               <a href='#projects' >projects</a>
               <a href='#resume' >resume</a>
               <a href='#skills' >skills</a>
               <a href='#contact' >contact</a>
            </div>
        </nav>
    
        
    )
}