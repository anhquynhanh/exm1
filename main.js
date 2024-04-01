let dots = document.querySelectorAll('.slider__dots li');

let currentDotIndex = 0;

function changeActiveDot() {
	dots[currentDotIndex].classList.remove('active');

	currentDotIndex++;

	if (currentDotIndex >= dots.length) {
		currentDotIndex = 0;
	}

	dots[currentDotIndex].classList.add('active');
}

setInterval(changeActiveDot, 3000);