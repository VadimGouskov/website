import p5 from 'p5';
import { Grid } from './grid';

const createSketch = (p: p5, width: number, height: number) => (p: p5) => {
    const CANVAS_WIDTH = width ?? 500;
    const CANVAS_HEIGHT = height ?? 500;
    const POINT_SIZE = 10;
    const POINT_DISTANCE = 4;

    const POINTS_AMOUNT = CANVAS_WIDTH / ( POINT_SIZE * POINT_DISTANCE / 2);

    const MOUSE_DT = 0.2;
    const TOUCH_DT = 0.1; 
    let t = 0;
    let DT = MOUSE_DT;

    const grid = new Grid(POINTS_AMOUNT, POINTS_AMOUNT, CANVAS_HEIGHT, CANVAS_WIDTH)

    p.setup = () => {
        p.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
        addEventListeners(p);
        p.noLoop();
    };

    p.draw = () => {
        p.clear();
        centerScale(0.9);
        p.ellipseMode(p.CENTER);
        p.rectMode(p.CENTER);
        p.noStroke();
        p.fill("#f77f00");
        
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

        // TODO change to canvas parent element
        document.addEventListener('mousemove', (event: Event) => {
            // redraw when mouse is moving within the canvas
            if(p.mouseX > 0 && p.mouseX < CANVAS_WIDTH && 
                p.mouseY > 0 && p.mouseY < CANVAS_HEIGHT) {
                    DT = MOUSE_DT;
                p.redraw();
            }
        });

            // TODO change to canvas parent element
        document.addEventListener('touchmove', (event: Event) => {
            // redraw when mouse is moving within the canvas
            if(p.mouseX > 0 && p.mouseX < CANVAS_WIDTH && 
                p.mouseY > 0 && p.mouseY < CANVAS_HEIGHT) {
                DT = TOUCH_DT;
                p.redraw();
            }
        });

    }
    
};

export default createSketch;
