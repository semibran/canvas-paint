module.exports = function line(canvas, options) {
  var context = canvas.getContext('2d')
  context.beginPath()
  context.moveTo(options.start.x, options.start.y)
  context.lineTo(options.end.x, options.end.y)
  if (options.stroke) {
    context.strokeStyle = options.stroke.color
    context.lineWidth = options.stroke.width || 1
    context.stroke()
  }
}
