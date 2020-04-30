function scrollAppear() {
	var serviceContainer = document.querySelector('.services-container');
	var introPosition = serviceContainer.getBoundingClientRect().top;
	var midContainer = document.querySelector('.mid-container');
	var midPosition = midContainer.getBoundingClientRect().top;
	var processBox = document.querySelector('.process');
	var processPosition = processBox.getBoundingClientRect().top;
	var brandText = document.querySelector('.brand-text');
	var brandPosition = brandText.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.4;

	if (introPosition < screenPosition) {
		serviceContainer.classList.add('appear');
	}
	if (midPosition < screenPosition) {
		midContainer.classList.add('appear');
	}
	if (processPosition < screenPosition) {
		processBox.classList.add('appear');
	}
	if (brandPosition < screenPosition) {
		brandText.classList.add('appear');
	}
}
// add event listener

window.addEventListener('scroll', scrollAppear);
