document.addEventListener('DOMContentLoaded', function () {

var bounceElements = document.querySelectorAll('.bounceElement');

bounceElements.forEach(function (bounceElement) {
	var icon = bounceElement.querySelector('i');

	bounceElement.addEventListener('mouseenter', function () {
		icon.classList.add('animate__animated', 'animate__bounce');
	});

	bounceElement.addEventListener('mouseleave', function () {
		icon.classList.remove('animate__animated', 'animate__bounce');
	});
});

});