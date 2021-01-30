function pageLoader() {
  const content = document.querySelector('#content');

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
  main.style.backgroundColor = '#252535';

  const h2 = document.createElement('h2');
  h2.textContent = 'Choose wisely 😋';
  h2.style.fontSize = '36px';
  h2.style.textShadow = '5px 5px 10px #000';
  h2.style.color = '#F7F7F7';

  main.appendChild(h2);

  content.appendChild(main);
}

export { pageLoader };