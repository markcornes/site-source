import p5 from 'p5';
import { useRef, useEffect } from 'react';

function sketch(p) {
    class ArrayList extends Array {
        constructor() {
            super(...[]);
        }
        size() {
            return this.length;
        }
        add(x) {
            this.push(x);
        }
        get(i) {
            return this[i];
        }
        remove(i) {
            this.splice(i, 1);
        }
    }

    let x, theta;
    let y;
    let harmonic = 1;
    let framerate = 200;
    class Wave {
        h;
        x;
        y;
        constructor(h_) {
            this.h = h_;
        }
        update(a) {
            this.x = (800 * a) / p.TWO_PI;
            this.y = 100 * p.sin(this.h * a) + 400;
            p.ellipse(this.x, this.y, 10, 10);
        }
    }
    let waves;
    p.setup = function() {
        p.createCanvas(800, 800);
        x = 0;
        waves = new ArrayList();
        waves.add(new Wave(1));
        waves.add(new Wave(-1));
    }
    p.draw = function() {
        p.frameRate(framerate);
        p.noStroke();
        p.fill(238, 238, 238, 1);
        p.rect(0, 0, p.width, p.height);
        if (theta < p.TWO_PI) {
            theta += p.TWO_PI / framerate;
        } else {
            theta = 0;
        }
        p.fill(0);
        for (let wave of waves) {
            wave.update(theta);
        }
    }
    function mouseClicked() {
        harmonic += 1;
        waves.add(new Wave(harmonic));
        waves.add(new Wave(-harmonic));
    }
}

function Harmonics() {
    const p5ContainerRef = useRef();

    useEffect(() => {
        // On component creation, instantiate a p5 object with the sketch and container reference 
        const p5Instance = new p5(sketch, p5ContainerRef.current);

        // On component destruction, delete the p5 instance
        return () => {
            p5Instance.remove();
        }
    }, []);

    console.log("ran");

    return (
        <div ref={p5ContainerRef}/>
    );
}

export default Harmonics;