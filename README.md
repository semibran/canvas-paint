# canvas-draw
> Drawing methods for Canvas API

**Note:** This module is a work in progress. More methods will be added as necessary.

```javascript
const Draw = require('canvas-draw')

var draw = Draw(canvas)
draw
  .fill('black')
  .clear(x, y, width, height)
  .rect(color)(x, y, width, height)
  .image(image)(x, y, width, height)
```

## Installation
```sh
npm install semibran/canvas-draw
```

## License
MIT
