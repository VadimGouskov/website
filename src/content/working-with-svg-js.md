---
title: Manipulating SVGs using SVG.js
description: A JavaScript library that makes creating and manipulating SVG elements more straight-forward, readable and versatile.
---

# Manipulating SVGs using SVG.js

## Introduction

SVG.js is a JavaScript library that makes creating and manipulating SVG elements more straight-forward, readable and versatile. It is a lightweight library that is easy to use and has a lot of features that make it a great choice for working with SVGs.

## Getting Started

To get started with SVG.js, you can include the library in your project using a script tag:

```html

<script src="https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.0.15/svg.min.js"></script>

```

You can also install it using npm:

```bash

npm install @svgdotjs/svg.js

```

## Creating an SVG

To create an SVG element, you can use the `SVG()` function:

```javascript
const draw = SVG().addTo("body").size(300, 300);
```

This will create an SVG element and append it to the body of the document. You can also specify the width and height of the SVG element using the `size()` method.

## Creating Shapes

You can create shapes such as rectangles, circles, ellipses, and polygons using the `rect()`, `circle()`, `ellipse()`, and `polygon()` methods:

```javascript
const rect = draw.rect(100, 100).fill("yellow");

const circle = draw.circle(50).fill("blue");

const ellipse = draw.ellipse(100, 50).fill("green");

const polygon = draw.polygon("0,0 100,0 100,100 0,100").fill("red");
```

## Manipulating Shapes

You can manipulate shapes using methods such as `move()`, `rotate()`, `scale()`, and `skew()`:

```javascript
rect.move(50, 50);

circle.rotate(45);

ellipse.scale(2);

polygon.skew(10, 20);
```

## Adding Text

You can add text to an SVG element using the `text()` method:

```javascript
const text = draw.text("Hello, SVG.js!").fill("black").move(50, 50);
```

## Conclusion

SVG.js is a powerful library that makes working with SVG elements more straight-forward, readable and versatile. It has a lot of features that make it a great choice for creating and manipulating SVGs. If you are working with SVGs in your projects, I highly recommend checking out SVG.js.

## Resources

-   [SVG.js Documentation](https://svgjs.com/docs/3.0/)
