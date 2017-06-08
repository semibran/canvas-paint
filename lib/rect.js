module.exports = function rect(canvas, options) {
  var context = canvas.getContext('2d')
  context.beginPath()
  context.rect(options.x, options.y, options.width, options.height)
  if (options.fill) {
    context.fillStyle = options.fill
    context.fill()
  }
  if (options.stroke) {
    context.strokeStyle = options.stroke.color
    context.lineWidth = options.stroke.width || 1
    context.stroke()
  }
}
