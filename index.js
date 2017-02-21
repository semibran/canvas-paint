module.exports = function Draw(canvas) {

	var context = canvas.getContext('2d')
	var methods = { fill, clear, rect, image }

	return methods

	function fill(color) {
		context.fillStyle = color
		context.fillRect(0, 0, canvas.width, canvas.height)
		return methods
	}

	function clear(x, y, width, height) {
		if (!arguments.length) {
			x = 0
			y = 0
			width = canvas.width
			height = canvas.height
		}
		context.clearRect(x, y, width, height)
		return methods
	}

	function rect(color) {
		return function at(x, y, width, height) {
			context.fillStyle = color
			context.fillRect(x, y, width, height)
			return methods
		}
	}

	function image(image) {
		return function at(x, y, width, height) {
			if (arguments.length === 2) {
				width = image.width
				height = image.height
			}
			context.drawImage(image, x, y, width, height)
			return methods
		}
	}
}
