import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
	modals('.popup_engineer', '.header_btn_wrap', '.popup_close, .popup_calc_close', '.popup', '.popup_calc', '.glazing_price_btn', '.phone_link');
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
	forms();
});

