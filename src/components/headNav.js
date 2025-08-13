import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './components.css';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (!homeSection) return;

      const scrollPosition = window.scrollY;
      const homeHeight = homeSection.offsetHeight;

      if (scrollPosition > homeHeight - 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`headNav ${showNavbar ? 'show' : ''}`}>

            <div className="logo">
               <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="navi">
               <a href='#home' >home</a>
               <a href='#projects' >projects</a>
               <a href='#resume' >resume</a>
               <a href='#skills' >skills</a>
               <a href='#contact' >contact</a>
            </div>
    </div>
  );
};

export default Navbar;
