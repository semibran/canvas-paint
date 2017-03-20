# canvas-draw
> Drawing methods for Canvas API

**Note:** This module is a work in progress. More methods will be added as necessary.

```javascript
const Draw = require('canvas-draw')

Draw(canvas)
  .fill('black')
  .clear(width, height)(x, y) // or clear whole canvas with `clear()`
  .rect(color, width, height)(x, y)
  .circle(color, radius)(x, y)
  .arc(color, radius, 0, 90)(x, y) // accepts angles instead of radians
  .image(image, width, height)(x, y) // or omit width and height to use natural dimensions
  .pixels(imageData) // or omit argument to get pixel data
```

## Installation
```sh
npm install semibran/canvas-draw
```

## License
MIT
