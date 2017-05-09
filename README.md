# canvas-draw
> Drawing methods for <canvas> API

**Note:** This module is a work in progress. More methods will be added/removed as deemed necessary.

```javascript
const Draw = require('canvas-draw')

Draw(canvas)
  .fill('black')
  .clear(width, height)(x, y) // or clear whole canvas with `clear()`
  .rect(color, width, height)(x, y)
  .circle(color, radius)(x, y)
  .arc(color, radius, 0, 2 * Math.PI)(x, y)
  .image(image, width, height)(x, y) // or omit width and height to use natural dimensions
```

## install
```sh
npm install semibran/canvas-draw
```

## license
MIT
