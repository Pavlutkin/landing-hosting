"use strict";

var slider = (function () {
	var slideLeft = document.querySelector('.slider__button-left'),
		slideRight = document.querySelector('.slider__button-right'),
		slideList = document.querySelector('.slider__list'),
		position = 0,
		indxSlide = 0,
		amountSlide = slideList.children.length - 1,
		getWidthImg = +getComputedStyle(slideList.firstElementChild.
			querySelector('img')).width.slice(0,-2),
		getWidth = +getComputedStyle(slideList.firstElementChild).
			width.slice(0,-2),
		shiftPosition = getWidth,
		endShift = (getWidthImg - shiftPosition)/2,
		sumShift = getWidthImg + endShift;
		

		console.log("Слайдов: " + amountSlide);
		console.log("Ширина картинки: " + getWidthImg);
		console.log("Ширина показа картинки: " + getWidth);
		console.log("Сдвиг: "+ shiftPosition);
		console.log("Конечн.сдвиг: " + endShift);
		console.log("Суммарн.сдвиг: " + sumShift);

		
	var checkSlide = document.querySelector('.slider__check-slide');


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
		if(position === sumShift) sumShift -= endShift;
		position += sumShift;
		slideList.style.marginLeft = '-' + position + 'px';
		checkSlideRight(indxSlide);
		++indxSlide;
		console.log(indxSlide);
		console.log(getWidthImg);
		console.log(position);
		if (position >= getWidthImg * amountSlide) slideRight.style.display = 'none';
	}
	slideRight.addEventListener('click', moveLeft);


	function moveRight() {
		slideRight.style.display = 'flex';
		if(position === sumShift + endShift) sumShift += endShift;
		position -= sumShift;
		slideList.style.marginLeft = '-' + position + 'px';
		checkSlideLeft(indxSlide);
		--indxSlide;
		if (position <= 0) slideLeft.style.display = 'none';
	}
	slideLeft.addEventListener('click', moveRight);
})();






// var slider = (function () {
// 	var slideLeft = document.querySelector('.slider__button-left'),
// 		slideRight = document.querySelector('.slider__button-right'),
// 		slideList = document.querySelector('.slider__list'),
// 		position = 0,
// 		indxSlide = 0;
// 	var checkSlide = document.querySelector('.check-slide');


// 	function checkSlideRight(indxSlide) {
// 		checkSlide.children[indxSlide].classList.remove('check-item');
// 		checkSlide.children[indxSlide + 1].classList.add('check-item');
// 	}
// 	function checkSlideLeft(indxSlide) {
// 		checkSlide.children[indxSlide].classList.remove('check-item');
// 		checkSlide.children[indxSlide - 1].classList.add('check-item');
// 	}


// 	function moveLeft() {
// 		slideLeft.style.display = 'flex';
// 		position += 1170;
// 		slideList.style.marginLeft = '-' + position + 'px';
// 		checkSlideRight(indxSlide);
// 		++indxSlide;
// 		if (position === 2340) slideRight.style.display = 'none';
// 	}
// 	slideRight.addEventListener('click', moveLeft);


// 	function moveRight() {
// 		slideRight.style.display = 'flex';
// 		position -= 1170;
// 		slideList.style.marginLeft = '-' + position + 'px';
// 		checkSlideLeft(indxSlide);
// 		--indxSlide;
// 		if (position === 0) slideLeft.style.display = 'none';
// 	}
// 	slideLeft.addEventListener('click', moveRight);
// })();

