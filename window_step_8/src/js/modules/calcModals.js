const calcModals = () => {
	const smallImages = document.querySelectorAll('.balcon_icons img'),
		bigImages = document.querySelectorAll('.big_img img'),
		balconIcons = document.querySelector('.balcon_icons'),
		formWidth = document.getElementById('width'),
		formHeight = document.getElementById('height');


	balconIcons.style.cursor = 'pointer';

	//Увеличение изображений:
	smallImages.forEach((smallImages, index) => {
		smallImages.addEventListener('click', () => {
			bigImages.forEach((bigImg) => {
				bigImg.classList.add('hidden');
				bigImg.classList.remove('selected');
			});

			bigImages[index].classList.remove('hidden');
			bigImages[index].classList.add('selected');
			bigImages[index].style.display = 'block';
			bigImages[index].style.margin = '3rem auto';

		});
	});

	//RegEx: возможный ввод только цифр:
	function filterInput(event) {
		let inputValue = event.target.value;
		event.target.value = inputValue.replace(/\D/g, '');
	}

	// Добавляем обработчики события input для обоих полей
	formWidth.addEventListener('input', filterInput);
	formHeight.addEventListener('input', filterInput);

}
export default calcModals;