// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './components.css';
export default function Nav(){




    return(
     
     
          <nav>
               <a href='/' className='nav-logo' >
                    <FontAwesomeIcon icon={faCode} />
               </a>
            
            <div className="navi">
               <a href='#home' >home</a>
               <a href='#projects' >projects</a>
               <a href='#resume' >resume</a>
               <a href='#skills' >skills</a>
               <a href='#contact' >contact</a>
            </div>
        </nav>
    
        
    )
}