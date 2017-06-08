module.exports = function fill(canvas, color) {
  var context = canvas.getContext('2d')
  context.fillStyle = color
  context.fillRect(0, 0, canvas.width, canvas.height)
}
