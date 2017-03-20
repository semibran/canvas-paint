module.exports = function Draw(canvas) {

	var context = canvas.getContext('2d')
	var methods =
    { fill
    , clear
    , rect
    , circle
    , image
    , pixels
    }

	return methods

  // fill(color)
	function fill(color) {
    rect(color, canvas.width, canvas.height)(0, 0)
		return methods
	}

  // clear(width, height)(x, y)
	function clear(width, height) {
		if (!arguments.length)
      return clear(canvas.width, canvas.height)(0, 0)
    return function at(x, y) {
  		context.clearRect(x, y, width, height)
  		return methods
    }
	}

  // rect(color, width, height)(x, y)
	function rect(color, width, height) {
    return function at(x, y) {
      context.fillStyle = color
  		context.fillRect(x, y, width, height)
  		return methods
    }
	}

  // circle(color, radius)(x, y)
  function circle(color, radius) {
    return function at(x, y) {
      context.fillStyle = color
      context.beginPath()
      context.arc(x, y, radius, 0, Math.PI * 2)
      context.fill()
      return methods
    }
  }

  // image(image, width, height)(x, y)
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

  function pixels(imageData) {
    if (!imageData)
      return context.getImageData(0, 0, canvas.width, canvas.height)
    context.putImageData(imageData, 0, 0)
    return methods
  }
}
