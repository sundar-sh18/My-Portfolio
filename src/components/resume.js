import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';



export default function Resume(){



    return(
        <>
        <div id='resume' class="resume">
            <header>
                <h1>My Resume</h1>
            </header>
            <div class="resume-content">
                <div class="education">
                    <h3 className='top'>education</h3>
                    <div class="present">
                        <div class="icon ln">
                            <FontAwesomeIcon icon={faGraduationCap}/>
                        </div>
                        <div class="edu-1 edu">
                            <h4>2022-present</h4>
                            <h3>computer science engineer</h3>
                            <h5>gcem,banglore</h5>
                        </div>
                    </div>
                    <div class="puc">
                        <div class="icon ln">
                            <FontAwesomeIcon icon={faGraduationCap}/>
                        </div>
                        <div class="edu-2 edu">
                            <h4>2020-2022</h4>
                            <h3>pcmc</h3>
                            <h5>charan's,banglore</h5>

                        </div>
                    </div>
                    <div class="sslc">
                        <div class="icon">
                            <FontAwesomeIcon icon={faGraduationCap}/>
                        </div>
                        <div class="edu-3 edu">
                            <h4>2020</h4>
                            <h3>sslc</h3>
                            <h5>kps,banglore</h5>

                        </div>
                    </div>
                </div>
                <div class="work">
                    <h3 className='top'>Work experience</h3>
                </div>
            </div>
        </div>
            
        </>
    )
}