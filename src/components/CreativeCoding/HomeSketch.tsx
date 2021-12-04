import p5Type from "p5";
import * as React from "react";

class HomeSketch extends React.Component {
    myRef: React.RefObject<HTMLDivElement>;
    myP5: p5Type;
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
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

        this.myP5 = new p5(Sketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export default HomeSketch;
