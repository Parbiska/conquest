const swiper = new Swiper('.advantages__slider', {
	loop: true,

	pagination: {
		el: '.advantages__pagination',
		type: 'fraction',
		renderFraction: (currentClass, totalClass) =>
			`<span class="${currentClass}"></span>`,
	},

	navigation: {
		nextEl: '.advantages__button-next',
		prevEl: '.advantages__button-prev',
	},
})
