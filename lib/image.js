module.exports = function image(canvas, options) {
  var context = canvas.getContext('2d')
  context.drawImage(options.image, options.x, options.y, options.width || options.image.width, options.height || options.image.height)
}
