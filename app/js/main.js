
// * BURGER MENU

(() => {
	const burgerOpen = document.querySelector('.header__box-burger')
	const burgerClose = document.querySelector('.header__nav-close')
	const navigationMenu = document.querySelector('.header__nav')

	burgerOpen.addEventListener('click', () => {
		navigationMenu.classList.add('active')
	})
	burgerClose.addEventListener('click', () => {
		navigationMenu.classList.remove('active')
	})
})();

// * SWIPER

(() => {
	const swiper = new Swiper('.swiper', {
		loop: true,
		spaceBetween: 25,
		speed: 400,
		grabCursor: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	});
})();

// * TABS

(() => {
	const tabsItem = document.querySelectorAll('.tabs__links-item')
	const tabsBlock = document.querySelectorAll('.tabs__content-item')
	
	tabsItem.forEach((tab, index) => {
		tab.addEventListener('click', () => {

			tabsBlock.forEach((content) => {
				content.classList.remove('active')
			})
			tabsItem.forEach((content) => {
				content.classList.remove('active')
			})
			tabsItem[index].classList.add('active')
			tabsBlock[index].classList.add('active')
		})
	})
})();

// * POPUP EXAMPLE

// const myPopup = new Popup({
// 	id: "my-popup",
// 	title: "My First Popup",
// 	content: `
// 			An example popup.
// 			Supports multiple lines.`,
// });