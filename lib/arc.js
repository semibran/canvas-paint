module.exports = function arc(canvas, options) {
  var context = canvas.getContext('2d')
  context.beginPath()
  context.arc(options.x, options.y, options.radius, degrees(options.start - 90), degrees(options.end - 90))
  context.lineTo(options.x, options.y)
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

function degrees(degrees) {
  return degrees * Math.PI / 180
}
