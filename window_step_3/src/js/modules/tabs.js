const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector);

	//Cоздаем функции(2), чтобы скрыть и показать элементы
	function hideTabContent() {
		content.forEach(item => {
			item.style.display = 'none';
		});

		tab.forEach(item => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		content[i].style.display = 'block';
		tab[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	//Далее используем делегирование событий, чтобы отследить на
	//какой tab указал пользователь 

	//Навешиваем область клика, которая включает в себя все tab's
	header.addEventListener('click', (e) => {
		//Действительно проверяем, что мы кликнули в один из tab's (могут быть пустыее места, элементы внутри табов и тд)
		const target = e.target;
		if (target &&
			(target.classList.contains(tabSelector.replace(/\./, ""))
				|| target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
			//Удостоверились, что мы кликнули в tab => начинаем перебирать tab один за другим (запоминаем не только tab, но и его номер по порядку)
			tab.forEach((item, i) => {
				//Как только выполняется условие, что таб на который кликнул пользователь = табу, который сейчас перебирается => мы запоминаем его индекс => 
				//начинаем его использвать при помощи тех функций, которые мы записали 
				if (target == item || target.parentNode == item) {
					hideTabContent();
					showTabContent(i);
				}
			})
		}
	});
};

export default tabs;
