import './components.css';
import fig from '../assets/marquee-icon.png'
import Smart from '../assets/attendance.png'
import Ai from '../assets/ai.png'
import Rig from '../assets/rig.png'
import Portfolio from '../assets/portfolio.png'
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
                        <li>Postman</li>
                        <img src={fig} alt="" />
                        <li>HTML5</li>
                        <img src={fig} alt="" />
                        <li>CSS3</li>
                        <img src={fig} alt="" />
                        <li>MongoDB</li>
                        <img src={fig} alt="" />
                        <li>Git</li>
                        <img src={fig} alt="" />
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
                        <li>Postman</li>
                        <img src={fig} alt="" />
                        <li>HTML5</li>
                        <img src={fig} alt="" />
                        <li>CSS3</li>
                        <img src={fig} alt="" />
                        <li>MongoDB</li>
                        <img src={fig} alt="" />
                        <li>Git</li>
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
                    
                        <p>The system uses a live webcam feed to detect all individuals present and employs a deep learning-based recognition model to identify registered students. It is built to be robust, with logic to handle unknown faces and a unique duration threshold that only marks a student as "Present" after they have been recognized for a cumulative period of 40 minutes, effectively preventing misuse. At the end of a session, the system automatically generates a detailed Excel report, records the entire video feed, and sends email notifications to absent students, creating a complete and efficient administrative tool.</p>
                        <li><span>Advanced AI/ML Pipeline</span></li>
                        <li><span>Automated Reporting & Notifications</span></li>
                        <li><span>Robust Presence Validation</span></li>
                        <li><span>Comprehensive Session Auditing</span></li>
                        <a type='button' href="https://github.com/sundar-sh18/Smart-Attendance-System" target='_blank' rel='noreferrer'>view project</a>
                    </div>
                    <div className="pro-img">
                            <img src={Smart} alt="Attendance"/>
                    </div>
                </div>
                   
                <div className="project">
                    <div className='pro-content'>
                        <h6>ai</h6>
                        <h3>ai chat bot ( ARCANE )</h3>
                        <p>Arcane is an interactive AI chatbot built with a strong emphasis on natural language understanding and multilingual support. Powered by Google’s Gemini API, it enables users to have smooth, real-time conversations through both text and voice. The backend is developed using Flask (Python) with MongoDB for persistent data storage, and the frontend offers a minimal yet elegant UI. The chatbot can understand and respond in multiple Indian languages, making it more inclusive and region-friendly.</p>
                        <li><span>Voice Interaction</span></li>
                        <li><span>Gemini AI Integration</span></li>
                        <li><span>Chat History & UI Elements</span></li>
                        <li><span>User Experience & Accessibility</span></li>
                        <a href="https://github.com/sundar-sh18/AI-Chatbot" target='_blank' rel='noreferrer'>view project</a>
                    </div>
                    <div className="pro-img">
                        <img src={Ai} alt="ai chat bot"/>
                    </div>
                </div>
                    
                <div className="project">
                    <div className='pro-content'>
                        <h6>iot</h6>
                        <h3>thrust test rig with iot</h3>
                        <p>An IoT-enabled thrust testing setup designed to evaluate motor performance in real-time. It uses an ESP32 to collect data from a 10kg load cell (thrust), ADXL335 accelerometer (vibration), and MLX90614 IR sensor (temperature). A 10k potentiometer allows manual motor speed control, while an LM2596 regulates power supply. Sensor data is transmitted over Wi-Fi for cloud-based visualization and analysis. The rig is compact, modular, and ideal for experimentation, research, and learning.</p>
                        <li><span>Real-Time Monitoring</span></li>
                        <li><span>IoT Connectivity</span></li>
                        <li><span>Motor Control</span></li>
                        <li><span>Compact & Scalable</span></li>
                        <a href="https://github.com/sundar-sh18/Thrust-Test-Rig-with-IOT.git" target='_blank' rel='noreferrer'>view project</a>
                    </div>
                    <div className="pro-img">
                        <img src={Rig} alt="iot"/>
                    </div>
                </div>
                   
                <div className="project">
                    <div className='pro-content'>
                        <h6>ui/ux</h6>
                        <h3>portfolio</h3>
                        <p>A responsive and visually appealing web developer portfolio that reflects creativity and technical expertise.
                        It showcases key projects with live demos and code links to highlight real-world skills.
                        Built with clean UI/UX principles, ensuring smooth navigation and accessibility across devices.
                        The design adapts seamlessly from desktop to mobile for a consistent user experience.
                        Includes integrated contact and social links for easy communication and networking.</p>
                        <li><span>Responsive Design</span></li>
                        <li><span>Project Showcase with Live Demos</span></li>
                        <li><span>Intuitive UI/UX</span></li>
                        <li><span>Contact & Social Integration</span></li>
                        <a href="https://github.com/sundar-sh18/My-Portfolio">view project</a>
                    </div>
                    <div className="pro-img">
                        <img src={Portfolio} alt="ui/ux"/>
                    </div>
                </div>
            </div>
        </div>
    )
}