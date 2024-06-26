const images = () => {
	const imgPopup = document.createElement('div'),
		workSection = document.querySelector('.works'),
		bigImg = document.createElement('img');

	//Создаем элементы динамически:
	imgPopup.classList.add('popup');
	workSection.appendChild(imgPopup);


	imgPopup.style.justifyContent = 'center';
	imgPopup.style.alignItems = 'center';
	imgPopup.style.display = 'none';

	imgPopup.appendChild(bigImg);

	workSection.addEventListener('click', (e) => {
		e.preventDefault();

		let target = e.target;

		//c помощью target проверяем поддерживает ли элемент click
		if (target && target.classList.contains('preview')) {
			imgPopup.style.display = 'flex';
			const path = target.parentNode.getAttribute('href');
			bigImg.setAttribute('src', path);
		}

		if (target && target.matches('div.popup')) {
			imgPopup.style.display = 'none';
		}
	});

};

export default images;