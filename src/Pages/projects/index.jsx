import './index.css';
import FourierVisualiser from './project-files/fourier-visualiser'
import Harmonics from './project-files/harmonics'

import { useState } from 'react'


function Projects() {
    const [ isFourier, setFourier ] = useState(false);
    const [isHarmonics, setHarmonics] = useState(false);
    return (
        <div className="HomePage">
            <div className="Project" id="Buttons">
                <button onClick={() => {setFourier(!isFourier);
                    if(isHarmonics){setHarmonics(false)};
                }} className={"ProjectButton" + (isFourier ? " Active" : "")}>Fourier Visualiser</button>
                <button onClick={() => {setHarmonics(!isHarmonics);
                    if(isFourier){setFourier(false)};
                    }} className={"ProjectButton" + (isHarmonics ? " Active" : "")}>Harmonics</button>
            </div>
            <div className="Project" id="ProjectWindow">
                {isFourier ? <FourierVisualiser/> : ""}
                {isHarmonics ? <Harmonics/> : ""}
            </div>
        </div>
    );
}

export default Projects;