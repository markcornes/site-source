import './index.css';
import FourierVisualiser from './project-files/fourier-visualiser'
import Harmonics from './project-files/harmonics'

import { useState } from 'react'


function Projects() {
    const [ isFourier, setFourier ] = useState(false);
    const [isHarmonics, setHarmonics] = useState(false);
    return (
        <div className="HomePage">
            <div className="Article" style={{"text-align": "justify"}}>
                <h2>Projects</h2>
                <p>
                    Here is a collection of projects I've made over the years. Clicking a button should start the program in the window below (though it may be quite laggy), and clicking again should stop it.
                </p>
                <br/>
                <p>
                    Inspired by a youtube video by 3Blue1Brown, "Fourier Visualiser" was a program I made a long time ago with the Java library <code>processing</code> and ported over to <code>p5.js</code> to render in page.
                    It takes an input function, which for the example below is
                    <math display="block" style={{margin: "15px"}}><mi>y</mi><mspace width="8px"/>=<mspace width="8px"/>2cos(2 <mi>x</mi>) + cos(4 <mi>x</mi>) + cos(5 <mi>x</mi>) + cos(8 <mi>x</mi>)</math>
                    and plots the real and imaginary parts of its Fourier Transform, which it does by plotting the input function in polar coordinates and tracking the centre of mass when each point of
                    the function is imagined to be a small point mass. How cool is that?!
                </p>
                <br/>
                <p>
                    The "Harmonics" project is another little project made in Processing and converted to p5 which I just think looks nice.
                </p>
                <br/>
                <p>
                    I'll be adding more projects to this page when I can be bothered to.
                </p>
            </div>
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