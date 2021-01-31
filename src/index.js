import header from './modules/header';
import footer from './modules/footer';
import home from './modules/homeModule';
import menu from './modules/menuModule';
import contact from './modules/contactModule';

header();
home();
document.querySelector('#home').addEventListener('click', home.bind());
document.querySelector('#menu').addEventListener('click', menu.bind());
document.querySelector('#contact').addEventListener('click', contact.bind());
footer();