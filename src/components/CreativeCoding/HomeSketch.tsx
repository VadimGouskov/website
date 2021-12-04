import p5Type from "p5";
import * as React from "react";

const HomeSketch: React.FC = () => {
    const myRef = React.createRef<HTMLDivElement>();

    React.useEffect(() => {
        const p5 = require("p5");
        const Sketch = (p: p5Type) => {
            const CANVAS_WIDTH = 500;
            const CANVAS_HEIGHT = 500;

            p.setup = () => {
                p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
            };

            p.draw = () => {
                p.clear();
                p.fill(0);
                p.ellipseMode(p.CENTER);
                const size = (p.mouseX / CANVAS_WIDTH) * 50;
                p.ellipse(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, size, size);
            };
        };

        const myP5 = new p5(Sketch, myRef.current);
    });

    return <div ref={myRef}></div>;
};

export default HomeSketch;
