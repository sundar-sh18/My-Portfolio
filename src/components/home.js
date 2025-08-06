import React from 'react';
import './components.css';
// import Img from '../assets/Sundar_pic.JPG';
import SplitText from '../reactBits/TextAnimations/SplitText/SplitText';
import Nav from './nav';


export default function Home(){



    return(
    <>
                <div id='home' className='Home' style={{height:'100vh'}}>
                    <Nav/>
                    {/* <div className='Sundar'>
                        <img src={Img} alt='Sundar S'/>
                    </div> */}
                    <div className='intro'> 
                    <SplitText
                            text="Hi, I Am Sundar."
                            className="text-2xl font-semibold text-center h3"
                            delay={100}
                            duration={0.6}
                            ease="power3.out"
                            splitType="chars"
                            from={{ opacity: 0, y: 40 }}
                            to={{ opacity: 1, y: 0 }}
                            threshold={0.1}
                            rootMargin="-100px"
                            textAlign="center"
                        />
                        <h1>A passionate developer based in Bangalore</h1>
                        <p>Web developer crafting responsive, user-friendly websites.
                            Focused on clean code, performance, and great user experience.</p>
                        <div className="buttons">
                            <button>Got a project?</button>
                            <button>lets talk!</button>
                        </div>
                    </div>
                </div>
    </>
    )
}