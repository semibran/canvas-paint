module.exports = function text(canvas, options) {
  var context = canvas.getContext('2d')
  context.beginPath()
  context.textAlign = options.align || 'left'
  context.textBaseline = options.baseline || 'top'
  if (options.font) {
    var size = options.font.size || 16
    var family = options.font.family || 'sans-serif'
    context.font = size + 'px ' + family
  }
  if (options.fill) {
    context.fillStyle = options.fill
    context.fillText(options.text, options.x, options.y, options.width)
  }
  if (options.stroke) {
    context.strokeStyle = options.stroke.color
    context.lineWidth = options.stroke.width
    context.strokeText(options.text, options.x, options.y, options.width)
  }
}
