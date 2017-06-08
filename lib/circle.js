module.exports = function circle(canvas, options) {
  var context = canvas.getContext('2d')
  context.beginPath()
  context.arc(options.x, options.y, options.radius, 0, 2 * Math.PI)
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
