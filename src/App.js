import React from "react";
import './App.css';
import Home from './components/home';
import Projects from './components/projects';
import ClickSpark from './reactBits/Animations/ClickSpark/ClickSpark';
import Lightning from './reactBits/Backgrounds/Lightning/Lightning';



function App() {
  return (
    <>
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
          xOffset={-0.7}
          speed={1}
          intensity={1}
          size={1}
          />
          
          <Home/>
      </div>
      <Projects/>
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}></div>
      </ClickSpark>
    </>
    
  );
}

export default App;
