function smoothScroll(target, duration) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, distance, duration);
		window.scroll(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);	
	}

	function ease(t, b, c, d) {
		t /= d;
		return -c * t*(t-2) + b;
	};

	requestAnimationFrame(animation);
}

document.addEventListener('click', function(e) {
	if (e.target.id == 'header-nav') {
		smoothScroll('#header', 500)
	} else if (e.target.id == 'section-one-nav') {
		smoothScroll('#section-one', 500);
	} else if (e.target.id == 'section-two-nav') {
		smoothScroll('#section-two', 500);
	} else if (e.target.id == 'footer-nav') {
		smoothScroll('#footer', 500);
	}
});
