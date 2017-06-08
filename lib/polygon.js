module.exports = function polygon(canvas, options) {
  var context = canvas.getContext('2d')
  context.beginPath()
  for (var i = 0; i < options.points.length; i++) {
    var point = options.points[i]
    if (i === 0) {
      context.moveTo(point.x, point.y)
    } else {
      context.lineTo(point.x, point.y)
    }
  }
  context.closePath()
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
