const modals = (modalWindowSelector, triggerModalSelector, triggerCloseSelector, popupSelector,
	popupCalcSelector, triggerCalcSelector, triggerPhoneSelector, triggerCalcNextSelector,
	calcNextPopupSelector, popupCalcEndSelector, triggerCalcEndSelector) => {
	const modalWindow = document.querySelector(modalWindowSelector),
		triggerModal = document.querySelector(triggerModalSelector),
		triggerClose = document.querySelectorAll(triggerCloseSelector),
		popup = document.querySelector(popupSelector),
		popupCalc = document.querySelector(popupCalcSelector),
		triggerCalc = document.querySelectorAll(triggerCalcSelector),
		triggerPhone = document.querySelectorAll(triggerPhoneSelector),
		triggerCalcNext = document.querySelector(triggerCalcNextSelector),
		calcNextPopup = document.querySelector(calcNextPopupSelector),
		popupCalcEnd = document.querySelector(popupCalcEndSelector),
		triggerCalcEnd = document.querySelector(triggerCalcEndSelector);

	//Функция прокрутки:
	function toggleModal(modalElement, displayState) {
		modalElement.style.display = displayState;
		if (displayState === 'block') {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	//Функции для открытия окон:
	function openModal(modalElement) {
		toggleModal(modalElement, 'block');
	}

	const addModalTrigger = (elements, modal) => {
		if (elements instanceof NodeList || Array.isArray(elements)) {
			elements.forEach(element => {
				element.addEventListener('click', () => {
					openModal(modal);
				});
			});
		} else {
			elements.addEventListener('click', () => {
				openModal(modal);
			});
		}
	};

	addModalTrigger(triggerModal, modalWindow);
	addModalTrigger(triggerPhone, popup);
	addModalTrigger(triggerCalc, popupCalc);

	//Функции для закрытия окон:
	function closeModal(...modalElements) {
		modalElements.forEach(modal => {
			toggleModal(modal, 'none');
		});
	}

	triggerClose.forEach(button => {
		button.addEventListener('click', () => {
			closeModal(modalWindow, popupCalc, popup, calcNextPopup, popupCalcEnd);
		})
	})


	//Функции для закрытия окон при нажатии на подложку: 
	function closeSubstrate(modalElement) {
		modalElement.addEventListener('click', (e) => {
			if (e.target === modalElement) {
				closeModal(modalElement);
			}
		});
	}

	closeSubstrate(modalWindow);
	closeSubstrate(popup);
	closeSubstrate(popupCalc);
	closeSubstrate(calcNextPopup);
	closeSubstrate(popupCalcEnd);

	// setTimeout(function () {
	// 	openModal(popup);
	// }, 60000);

	//Не забыть раскоментировать, т.к. мешает разработке 

	//Функция для закрытия окна при нажатии на далее и открытии нового окна:
	function next(trigger, closePopup, openPopup) {
		trigger.addEventListener('click', () => {
			closePopup.style.display = 'none';
			openPopup.style.display = 'block';
		});
	};

	next(triggerCalcNext, popupCalc, calcNextPopup);
	next(triggerCalcEnd, calcNextPopup, popupCalcEnd);
};

export default modals;