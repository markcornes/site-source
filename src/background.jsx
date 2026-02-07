import React from 'react';
import p5 from 'p5';
import './background.css'
const { useRef, useState, useLayoutEffect } = React;

const SketchComp = props => {
  const containerRef = useRef();
  
  const Sketch = (p) => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, containerRef.current.clientHeight);
      p.stroke('#b3ac85ff');
      p.strokeWeight(9);
      p.frameRate(10);
      W = p.windowWidth;
    }

    let W, b, t=0, s=50, F=a=>p.map((b=t/60)%1,0,1,...[b,b+1].map(b=>p.noise(b|1,a)>.5?s:0))

    p.draw = () => {
      p.background('#EAE2B7');
      t += 5;
      let z;
      for(let x = 26; x--;)
        for(let y = 50; y--;)   
          (x + y) & 1 || p.rect(x * s, y * s, s, s, F((z = x + y * 20)), F(z + 1), F(z + 21), F(z + 20));
    }
    
    p.windowResized = function() {
      p.resizeCanvas(p.windowWidth, containerRef.current.clientHeight);
      W = p.windowWidth;
    }
  }

  useLayoutEffect(
    () => {
      // Make sure the p5.js canvas is a child of the component in the DOM
      let s = new p5(Sketch, containerRef.current);
      
      // Remove the sketch when the component is removed/replaced
      return () => s.remove();
    },
    // This empty list tells React that this effect never needs to get re-rendered
    []
  );

  return (
    <div className="sketch-container" ref={containerRef}></div>
  );
}

export default SketchComp;