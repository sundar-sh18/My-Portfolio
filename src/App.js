import React from "react";
import './App.css';
import Home from './components/home';
import Projects from './components/projects';
import ClickSpark from './reactBits/Animations/ClickSpark/ClickSpark';

function App() {
  return (
    <>
    <ClickSpark
                sparkColor='#8750ea'
                sparkSize={15}
                sparkRadius={55}
                sparkCount={9}
                duration={900}
              > 
      <Home/>
      <Projects/>
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}></div>
      </ClickSpark>
    </>
    
  );
}

export default App;
