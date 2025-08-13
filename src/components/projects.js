import './components.css';
import fig from '../assets/marquee-icon.png'
import Smart from '../assets/attendance.png'
import Ai from '../assets/ai.png'
import Rig from '../assets/rig.png'
import Portfolio from '../assets/portfolio.png'
export default function Projects(){


    const proData = [
        {
            h6: "machine learning",
            h3: "smart attendance system",
            p: 'The system uses a live webcam feed to detect all individuals present and employs a deep learning-based recognition model to identify registered students. It is built to be robust, with logic to handle unknown faces and a unique duration threshold that only marks a student as "Present" after they have been recognized for a cumulative period of 40 minutes, effectively preventing misuse. At the end of a session, the system automatically generates a detailed Excel report, records the entire video feed, and sends email notifications to absent students, creating a complete and efficient administrative tool.',
            span: [
                'Advanced AI/ML Pipeline',
                'Automated Reporting & Notifications',
                'Robust Presence Validation',
                'Comprehensive Session Auditing'
            ],
            link: "https://github.com/sundar-sh18/Smart-Attendance-System" ,
            image: Smart

        },
        {
            h6: "ai",
            h3: "ai chat bot ( ARCANE )",
            p: 'Arcane is an interactive AI chatbot built with a strong emphasis on natural language understanding and multilingual support. Powered by Google’s Gemini API, it enables users to have smooth, real-time conversations through both text and voice. The backend is developed using Flask (Python) with MongoDB for persistent data storage, and the frontend offers a minimal yet elegant UI. The chatbot can understand and respond in multiple Indian languages, making it more inclusive and region-friendly.',
            span: [
                'Voice Interaction',
                'Gemini AI Integration',
                'Chat History & UI Elements',
                'User Experience & Accessibility'
            ],
            link: "https://github.com/sundar-sh18/AI-Chatbot" ,
            image: Ai

        },
        {
            h6: "iot",
            h3: "thrust test rig with iot",
            p: 'An IoT-enabled thrust testing setup designed to evaluate motor performance in real-time. It uses an ESP32 to collect data from a 10kg load cell (thrust), ADXL335 accelerometer (vibration), and MLX90614 IR sensor (temperature). A 10k potentiometer allows manual motor speed control, while an LM2596 regulates power supply. Sensor data is transmitted over Wi-Fi for cloud-based visualization and analysis. The rig is compact, modular, and ideal for experimentation, research, and learning.',
            span: [
                'Real-Time Monitoring',
                'IoT Connectivity',
                'Motor Control',
                'Compact & Scalable'
            ],
            link: "https://github.com/sundar-sh18/Thrust-Test-Rig-with-IOT.git" ,
            image: Rig

        },
        {
            h6: "ui/ux",
            h3: "portfolio",
            p: 'A responsive and visually appealing web developer portfolio that reflects creativity and technical expertise.It showcases key projects with live demos and code links to highlight real-world skills.Built with clean UI/UX principles, ensuring smooth navigation and accessibility across devices.The design adapts seamlessly from desktop to mobile for a consistent user experience.Includes integrated contact and social links for easy communication and networking.',
            span: [
                'Responsive Design',
                'Intuitive UI/UX',
                'Project Showcase with Live Demos',
                'Contact & Social Integration'
            ],
            link: "https://github.com/sundar-sh18/My-Portfolio" ,
            image: Portfolio

        }
    ]

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
                {proData.map((proData)=>
                    <div className="project">
                    <div className='pro-content'>
                        <h6>{proData.h6}</h6>
                        <h3>{proData.h3}</h3>
                    
                        <p>{proData.p}</p>
                        {proData.span.map((span)=><li><span>{span}</span></li>)}
                        <a type='button' href={proData.link}target='_blank' rel='noreferrer'>view project</a>
                    </div>
                    <div className="pro-img">
                            <img src={proData.image} alt={proData.h3}/>
                    </div>
                </div>
            
            )}
            </div>
        </div>
    )
}