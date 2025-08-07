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
        img: Html,
        name: 'HTML'
    },
    {
        img: Css,
        name: 'CSS'
    },
    {
        img: Js,
        name: 'Js'
    },
    {
        img: Boot,
        name: 'BootStrap'
    },
    {
        img: Sql,
        name: 'Sql'
    },
    {
        img: React,
        name: 'React'
    },
    {
        img: Node,
        name: 'Node'
    },
    {
        img: Pman,
        name: 'PostMan'
    },
    {
        img: Git,
        name: 'Git'
    },
    {
        img: MDB,
        name: 'MongoDB'
    },
]



export default function Skills(){



    return(
        <>
       
        <div id='skills' class="skills-outer">
            <div class="skill-fill"></div>
            <div class="skill-h1">
                <h1 id='skill'>My skills</h1>
            </div>
            
            <div class="skills">
                {/* <div className="skill-flex"> */}
                {skills.map((skill)=>(
                    <GlareHover
                        glareColor="#ffffff"
                        glareOpacity={0.5}
                        glareAngle={-30}
                        glareSize={300}
                        transitionDuration={800}
                        playOnce={false}>
                        <div class="skill">
                            <img src={skill.img} alt={skill.name} />
                            <h4>{skill.name}</h4>
                        </div>
                    </GlareHover>
                ))}
                {/* </div> */}
            </div>
        </div>
        
        </>
    )
}