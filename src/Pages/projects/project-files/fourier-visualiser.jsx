import p5 from 'p5';
import { useRef, useEffect } from 'react';

function sketch(p) {
    let x, y, r, theta;
    let a = 0;
    let f = 10;
    let avx = 0;
    let avy = 0;
    let mult = 10000;
    let xes;
    let yes;
    let ies;
    p.setup = function() {
        p.createCanvas(500, 500);
        p.frameRate(60);
        xes = [];
        ies = [];
    }

    p.draw = function() {
        p.background(0);
        p.strokeWeight(3);
        p.stroke(0, 0, 255);
        for (let i = 0; i < mult; i++) {
            theta = p.map(i, 0, mult, 0, a * p.TWO_PI);
            r =
                2 * p.cos(2 * theta) +
                p.cos(4 * theta) +
                p.cos(5 * theta) +
                p.cos(8 * theta);
            r *= 100;
            x = r * p.cos(theta * a) + p.width / 2;
            avx += x;
            y = r * p.sin(theta * a) + p.height / 2;
            avy += y;
            p.point(x, y);
        }
        avx = avx / mult;
        avy = avy / mult;
        xes.push(avx);
        ies.push(avy);
        p.stroke(0, 255, 0);
        p.strokeWeight(10);
        p.point(avx, avy);
        p.stroke(255, 0, 0);
        p.strokeWeight(1);
        p.line(p.width / 2, 0, p.width / 2, p.height);
        p.line(0, p.height / 2, p.width, p.height / 2);
        p.textSize(30);
        p.text("a = " + p.str(a), p.width - 145, p.height - 10);
        a += 0.005;
        p.strokeWeight(3);
        p.stroke(255);
        for (let i = 0; i < xes.length; i++) {
            p.point(i / 3, 600 - xes[i]);
        }
        p.stroke(255, 255, 0);
        for (let i = 0; i < ies.length; i++) {
            p.point(i / 3, 600 - ies[i]);
        }
    }
}

function FourierVisualiser() {
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
        <div ref={p5ContainerRef} />
    );
}

export default FourierVisualiser;