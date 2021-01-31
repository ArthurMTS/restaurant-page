export default function home() {
  const content = document.querySelector('#content');

  document.querySelector('#main') ? 
    content.removeChild(document.querySelector('#main')) :
    ''

  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  main.style.position = 'absolute';
  main.style.top = 0;
  main.style.width = '100%';
  main.style.height = '100vh';
  main.style.display = 'flex';
  main.style.justifyContent = 'center';
  main.style.alignItems = 'center';
  main.style.zIndex = -10;

  const h2 = document.createElement('h2');
  h2.textContent = 'Let\'s eat something 😋';
  h2.style.fontSize = '36px';
  h2.style.textShadow = '5px 5px 10px #000';
  h2.style.color = '#F7F7F7';

  const img = document.createElement('img');
  img.setAttribute('src', 'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
  img.setAttribute('alt', '');

  img.style.position = 'absolute';
  img.style.bottom = 0;
  img.style.width = '100vw';
  img.style.height = '100vh';
  img.style.zIndex = -10;

  main.appendChild(h2);
  main.appendChild(img);

  content.appendChild(main);
}