const modals = () => {
	const modalWindow = document.querySelector('.popup_engineer'),
		triggerModal = document.querySelector('.header_btn_wrap'),
		triggerClose = document.querySelectorAll('.popup_close'),
		popup = document.querySelector('.popup'),
		triggerPhone = document.querySelectorAll('.phone_link');

	function toggleModal(displayState) {
		modalWindow.style.display = displayState;
		popup.style.display = displayState;
		if (displayState === 'block') {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	function closeModal() {
		toggleModal('none');
	}

	function openModal() {
		toggleModal('block');
	}

	function openOnlyPopup() {
		popup.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	triggerModal.addEventListener('click', openModal);

	triggerClose.forEach(button => {
		button.addEventListener('click', closeModal);
	});

	modalWindow.addEventListener('click', (e) => {
		if (e.target === modalWindow) {
			closeModal();
		}
	});

	triggerPhone.forEach(button => {
		button.addEventListener('click', () => {
			openOnlyPopup();
		});
	});

	popup.addEventListener('click', (e) => {
		if (e.target === popup) {
			closeModal();
		}
	});

	// setTimeout(function () {
	// 	openOnlyPopup();
	// }, 60000);
	// Мешает разработке, не забыть раскоментировать
};

export default modals;