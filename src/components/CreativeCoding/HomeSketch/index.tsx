import p5Type from "p5";
import * as React from "react";
import createSketch from "./sketch";

const HomeSketch: React.FC = () => {
    const myRef = React.createRef<HTMLDivElement>();

    React.useEffect(() => {
        const p5 = require("p5");
        // width of the responsive div
        const canvasWidth = myRef.current.offsetWidth;

        // Removes any previous canvasses
        const canvases = myRef.current.getElementsByTagName("canvas");
        Array.from(canvases).forEach((canvas) => {
            canvas.remove();
        });

        const Sketch = createSketch(p5, canvasWidth, canvasWidth);
        const myP5 = new p5(Sketch, myRef.current);
    });

    return <div style={{width: "100%"}} ref={myRef}></div>;
};

export default HomeSketch;
