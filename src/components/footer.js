import './components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ShinyText from '../reactBits/TextAnimations/ShinyText/ShinyText';
import Links from './links.js'

export default function Footer(){



    return(
        <>
        <div id='contact' class="footer-outer">
            <div class="upper">
                <div>
                <h1>wants to start a project?</h1>
                </div>
                <div class="shiny">
                    <ShinyText text="Let's have a chat" disabled={false} speed={3} className='custom-class' />
                </div>
                <div class="mail">
                    <div class="link">
                    <a href="mailto:sundar.sh18@gmail.com">sundar.sh18@gmail.com</a>
                    <a href="mailto:sundar.sh18@gmail.com">< FontAwesomeIcon icon={faArrowRight} className='arrow'/></a>
                    </div>
                </div>
            </div>
            <div class="lower">
                <Links/>
                <h3>2025 all rights reserved by Sundar S</h3>
            </div>
        </div>
        </>
    )
}