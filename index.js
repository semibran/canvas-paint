module.exports = function Draw(canvas) {

	var context = canvas.getContext('2d')
	var methods = { fill, clear, rect, circle, arc, image, pixels }

	return methods

	function fill(color) {
		rect(color, canvas.width, canvas.height)(0, 0)
		return methods
	}

	function clear(width, height) {
		if (!arguments.length) {
			return clear(canvas.width, canvas.height)(0, 0)
		}
		return function at(x, y) {
			context.clearRect(x, y, width, height)
			return methods
		}
	}

	function rect(color, width, height) {
		return function at(x, y) {
			context.fillStyle = color
			context.fillRect(x, y, width, height)
			return methods
		}
	}

	function circle(color, radius) {
		return arc(color, radius, 0, 2 * Math.PI)
	}

	function arc(color, radius, start, end, anticlockwise) {
		return function at(x, y) {
			context.fillStyle = color
			context.beginPath()
			context.arc(x, y, radius, start, end, anticlockwise)
			context.fill()
		}
	}

	function image(image, width, height) {
		if (arguments.length === 1) {
			width = image.width
			height = image.height
		}
		return function at(x, y) {
			context.drawImage(image, x, y, width, height)
			return methods
		}
	}
}
