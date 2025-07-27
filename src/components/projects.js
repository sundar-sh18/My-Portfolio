import './components.css';
import ScrollStack, { ScrollStackItem } from '../reactBits/Components/ScrollStack/ScrollStack';
import fig from '../assets/marquee-icon.png'
export default function Projects(){



    return(
        <div id='projects' className='projects'>
            <div className="marquee">
                    <div className="marquee-content">
                        <img src={fig} alt="" />
                        <li>JavaScript</li>
                        <img src={fig} alt="" />
                        <li>React</li>
                        <img src={fig} alt="" />
                        <li>SQL</li>
                        <img src={fig} alt="" />
                        <li>NodeJs</li>
                        <img src={fig} alt="" />
                        <li>BootStrap</li>
                        <img src={fig} alt="" />
                    </div>
                </div>
            <div className="pro-head">
                <h1>My recent works</h1>
                <h5>recent Projects</h5>
            </div>
            <div className="projects-grid">
                 <div className="project">
                    <div className='pro-content'>
                        <h6>machine learning</h6>
                        <h3>smart attendance system</h3>
                        <p>Project was about precision and information. That’s all. Our design tem helps clients achieve their marketing Trager and branding that appeals to a website</p>
                        <li><span>d</span></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <a href="/">view project</a>
                    </div>
                        <div className="pro-img">
                            
                    </div>
                </div>
                   
                <div className="project">
                    <div className='pro-content'>
                        <h6>ai</h6>
                        <h3>ai chat bot</h3>
                        <p>Project was about precision and information. That’s all. Our design tem helps clients achieve their marketing Trager and branding that appeals to a website</p>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <a href="/">view project</a>
                    </div>
                    <div className="pro-img">
                        
                    </div>
                </div>
                    
                <div className="project">
                    <div className='pro-content'>
                        <h6>iot</h6>
                        <h3>thrust test rig with iot</h3>
                        <p>Project was about precision and information. That’s all. Our design tem helps clients achieve their marketing Trager and branding that appeals to a website</p>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <a href="/">view project</a>
                    </div>
                    <div className="pro-img">
                        
                    </div>
                </div>
                   
                <div className="project">
                    <div className='pro-content'>
                        <h6>ui/ux</h6>
                        <h3>portfolio</h3>
                        <p>Project was about precision and information. That’s all. Our design tem helps clients achieve their marketing Trager and branding that appeals to a website</p>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <a href="/">view project</a>
                    </div>
                    <div className="pro-img">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}