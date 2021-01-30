import header from './header';
import footer from './footer';
import * as homeModule from './homeModule';
import * as menuModule from './menuModule';
import * as contactModule from './contactModule';

header();
homeModule.pageLoader();
document.querySelector('#home').addEventListener('click', homeModule.pageLoader.bind());
document.querySelector('#menu').addEventListener('click', menuModule.pageLoader.bind());
document.querySelector('#contact').addEventListener('click', contactModule.pageLoader.bind());
footer();