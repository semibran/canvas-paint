module.exports = function clear(canvas, rect) {
  var context = canvas.getContext('2d')
  if (rect) {
    context.clearRect(rect.x, rect.y, rect.width, rect.height)
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height)
  }
}
