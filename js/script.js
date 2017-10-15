"use strict";
var slider = (function () {
	var slideLeft = document.querySelector('.slide-left'),
		slideRight = document.querySelector('.slide-right'),
		slideList = document.querySelector('.slider-list'),
		position = 0,
		indxSlide = 0;
	var checkSlide = document.querySelector('.check-slide');


	function checkSlideRight(indxSlide) {
		checkSlide.children[indxSlide].classList.remove('check-item');
		checkSlide.children[indxSlide + 1].classList.add('check-item');
	}
	function checkSlideLeft(indxSlide) {
		checkSlide.children[indxSlide].classList.remove('check-item');
		checkSlide.children[indxSlide - 1].classList.add('check-item');
	}


	function moveLeft() {
		slideLeft.style.display = 'flex';
		position += 1170;
		slideList.style.marginLeft = '-' + position + 'px';
		checkSlideRight(indxSlide);
		++indxSlide;
		if (position === 2340) slideRight.style.display = 'none';
	}
	slideRight.addEventListener('click', moveLeft);


	function moveRight() {
		slideRight.style.display = 'flex';
		position -= 1170;
		slideList.style.marginLeft = '-' + position + 'px';
		checkSlideLeft(indxSlide);
		--indxSlide;
		if (position === 0) slideLeft.style.display = 'none';
	}
	slideLeft.addEventListener('click', moveRight);
})();

