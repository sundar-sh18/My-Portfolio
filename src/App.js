import React, { useState } from "react";
import './App.css';
import Home from './components/home';
import HeadNav from './components/headNav'
import Projects from './components/projects';
import ClickSpark from './reactBits/Animations/ClickSpark/ClickSpark';
import Lightning from './reactBits/Backgrounds/Lightning/Lightning';
import Resume from "./components/resume";
import Count from "./components/counts";
import Skills from "./components/skills";
import Footer from "./components/footer";
import ShinyText from './reactBits/TextAnimations/ShinyText/ShinyText';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => setIsLoading(false), 3000);

  return (
    <>
    { isLoading ? (
      <div className="loading">
      <ShinyText text="Loading" disabled={false} speed={2} className='load ' />
    </div>
    ) : 
      <div style={{ width: '100%'}}>
        
        <HeadNav/>
        <ClickSpark
                    sparkColor='white'
                    sparkSize={15}
                    sparkRadius={55}
                    sparkCount={9}
                    duration={900}
                  > 
          <div style={{ width: '100%', height: '100vh', position: 'relative' }} className='spark'>
            <Lightning
              hue={260}
              xOffset={0}
              speed={1}
              intensity={1}
              size={1}
              />
            </div>
              <Home/>
          
          <Projects/>
          <Count/>
          <Resume/>
          <Skills/>
          <Footer/>
          </ClickSpark>
      </div>
      }
    </>
    
  );
}

export default App;
