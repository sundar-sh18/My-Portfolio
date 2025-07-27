import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './components.css';


export default function Links(){



    return(
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
    )
}