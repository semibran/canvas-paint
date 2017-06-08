module.exports = function image(canvas, options) {
  var context = canvas.getContext('2d')
  context.drawImage(options.image, options.x, options.y, options.width || image.width, options.height || image.height)
}
