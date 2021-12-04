import p5 from "p5";
import * as React from "react";

const HomeSketch: React.FC = () => {
    const sketchRef = React.useRef();
    const myP5 = React.useRef<p5>();

    React.useEffect(() => {
        if (typeof window === undefined) return;
        //myP5.current = new p5(sketch, sketchRef.current);
    });

    const sketch = (p: p5) => {
        const CANVAS_WIDTH = 500;
        const CANVAS_HEIGHT = 500;

        p.setup = () => {
            p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
        };

        p.draw = () => {
            p.background(255);
            p.fill(0);
            p.ellipseMode(p.CENTER);
            p.ellipse(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 50, 50);
        };
    };

    return <div ref={sketchRef.current}></div>;
};

export default HomeSketch;
