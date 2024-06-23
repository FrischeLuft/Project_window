import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import calcModals from "./modules/calcModals";
import changeModalState from "./modules/changeModalState";

window.addEventListener('DOMContentLoaded', () => {

	let modalState = {};

	changeModalState(modalState);
	modals('.popup_engineer',
		'.header_btn_wrap',
		'.popup_close, .popup_calc_close, .popup_calc_profile_close, .popup_calc_end_close',
		'.popup',
		'.popup_calc',
		'.glazing_price_btn',
		'.phone_link',
		'.popup_calc_button',
		'.popup_calc_profile',
		'.popup_calc_end',
		'.popup_calc_profile_button'
	);
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
	forms(modalState);
	calcModals();
});

