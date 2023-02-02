$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
});

// Carousel
const owl = $('.slide-one');

owl.owlCarousel({
	loop: true,
	startPosition: 0,
	margin: 20,
	responsive: {
		540: {
			items: 4,
			startPosition: 1,
		},
		810: {
			items: 5,
			startPosition: 1,
		},
		1000: {
			items: 6,
			margin: 20,
		},
	},
});

$('.slider__btn--prev').click(function () {
	owl.trigger('prev.owl.carousel');
});


$('.slider__btn--next').click(function () {
	owl.trigger('next.owl.carousel');
});
// Carousel2
const owlTwo = $('.slide-two');

owlTwo.owlCarousel({
	loop: true,
	startPosition: 0,
	margin: 20,
	nav: false, //Отключил навигацию
	autoplay: true, //Автозапуск слайдера
	smartSpeed: 2000, //Время движения слайда
	autoplayTimeout: 4000, //Время смены слайда
	responsive: {
		300: {
			items: 1,
			startPosition: 1,
		},
		500: {
			items: 2,
			startPosition: 1,
		},
		900: {
			items: 3,
			margin: 30,
		},
	},
});
// Аккордеон
$(document).ready(function () {
	$('.item-answers-block__title').click(function () {
		$(this).next('.item-answers-block__text').slideToggle();
	});
});
// Кнопка на верх
var button = $(".to-top");

$(window).scroll(function () {
	if ($(window).scrollTop() > 200) {
		button.show()
	} else {
		button.hide()
	};
});

button.click(function () {

	$('html , body').animate({ scrollTop: 0 }, 1000)

});



