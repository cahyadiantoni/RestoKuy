import 'regenerator-runtime';

import '../styles/header.css';
import '../styles/style.css';
import '../styles/card.css';
import '../styles/list.css';
import '../styles/detail.css';
import '../styles/hero.css';
import '../styles/loader.css';
import '../styles/footer.css';
import '../styles/responsive.css';

import './components/app-bar';
import './components/skip-tocontent';
import './components/foot-bar';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#menu_toggle'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  swRegister();
});
