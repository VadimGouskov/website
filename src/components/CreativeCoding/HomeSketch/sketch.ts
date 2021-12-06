import p5 from 'p5';
import { Grid } from './grid';

const createSketch = (p: p5, width: number, height: number) => (p: p5) => {
    const SKETCH_ID = "sketch";
    const CANVAS_WIDTH = width ?? 500;
    const CANVAS_HEIGHT = height ?? 500;
    const POINT_SIZE = 10;
    const POINT_DISTANCE = 4;

    const POINTS_AMOUNT = CANVAS_WIDTH / ( POINT_SIZE * POINT_DISTANCE / 2);

    let t = 0;
    const DT = 0.2;

    const grid = new Grid(POINTS_AMOUNT, POINTS_AMOUNT, CANVAS_HEIGHT, CANVAS_WIDTH)

    p.setup = () => {
        p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
        addEventListeners(p);
        //p.frameRate(30)
        p.noLoop();
    };

    p.draw = () => {
        p.clear();
        centerScale(0.9)

        p.ellipseMode(p.CENTER);
        p.rectMode(p.CENTER);
        p.noStroke();
        p.fill("#f77f00");

        // p.background(127);

        
        const WAVE_OFFSET_X = p.mouseX;
        const WAVE_OFFSET_Y = p.mouseY;

        p.translate(WAVE_OFFSET_X, WAVE_OFFSET_Y)

        grid.flat.forEach(point => {
            const AMPLITUDE = 15;
            const FREQUENCY = 0.02;
            const OFFSET = p.PI;

            const pointVector = p.createVector(point.x -WAVE_OFFSET_X, point.y -WAVE_OFFSET_Y);
            const movedVector = pointVector.copy();

            movedVector.setMag(pointVector.mag() + AMPLITUDE * Math.sin(t + pointVector.mag() * FREQUENCY + OFFSET));
            
            p.ellipse(movedVector.x, movedVector.y, POINT_SIZE, POINT_SIZE);
        })

        t += DT;
        
        //p.save("bl.png")

    };

    const centerScale = (amount: number) => {
        p.translate(CANVAS_WIDTH/2, CANVAS_HEIGHT/2);
        p.scale(amount);
        p.translate(-CANVAS_WIDTH/2, -CANVAS_HEIGHT/2);
    } 

    const addEventListeners = (p: p5): void => {
        document.addEventListener('scroll', (event: Event) => {
            p.redraw();
        });

        document.addEventListener('mousemove', (event: Event) => {
            // redraw when mouse is moving within the canvas
            if(p.mouseX > 0 && p.mouseX < CANVAS_WIDTH && 
                p.mouseY > 0 && p.mouseY < CANVAS_HEIGHT) {
                p.redraw();
            }
        });
    }
    
};

export default createSketch;
