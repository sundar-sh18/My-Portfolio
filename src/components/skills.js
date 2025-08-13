import './components.css'

import Boot from '../assets/skills/boot.png'
import Css from '../assets/skills/css.png'
import Git from '../assets/skills/git.png'
import Html from '../assets/skills/html.png'
import Js from '../assets/skills/js.png'
import MDB from '../assets/skills/mdb.png'
import Node from '../assets/skills/node.png'
import React from '../assets/skills/react.png'
import Pman from '../assets/skills/pman.png'
import Sql from '../assets/skills/sql.png'

import GlareHover from '../reactBits/Animations/GlareHover/GlareHover'

const skills = [
    {
        id: 1,
        img: Html,
        name: 'HTML'
    },
    {
        id: 2,
        img: Css,
        name: 'CSS'
    },
    {
        id:3,
        img: Js,
        name: 'Js'
    },
    {
        id: 4,
        img: Boot,
        name: 'BootStrap'
    },
    {
        id: 5,
        img: Sql,
        name: 'Sql'
    },
    {
        id: 6,
        img: React,
        name: 'React'
    },
    {
        id: 7,
        img: Node,
        name: 'Node'
    },
    {
        id: 8,
        img: Pman,
        name: 'PostMan'
    },
    {
        id: 9,
        img: Git,
        name: 'Git'
    },
    {
        id: 10,
        img: MDB,
        name: 'MongoDB'
    },
]



export default function Skills(){



    return(
        <>
       
        <div id='skills'  class="skills-outer">
            <div class="skill-h1">
                <h1 id='skill'>My skills</h1>
            </div>
            
            <div class="skills">
                {/* <div className="skill-flex"> */}
                {skills.map((skill)=>(
                    <GlareHover key={skill.id}
                        glareColor="#ffffff"
                        glareOpacity={0.5}
                        glareAngle={-30}
                        glareSize={300}
                        transitionDuration={800}
                        playOnce={false} className='skill-box'>
                        <div class="skill-img">
                            <img src={skill.img} alt={skill.name} />
                        </div>
                        <h4>{skill.name}</h4>
                    </GlareHover>
                ))}
                {/* </div> */}
            </div>
        </div>
        
        </>
    )
}