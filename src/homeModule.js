function pageLoader() {
  const content = document.querySelector('#content');

  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  const h2 = document.createElement('h2');
  h2.textContent = 'Let\'s eat something 😋';

  const img = document.createElement('img');
  img.setAttribute('src', 'https://images.unsplash.com/photo-1481833761820-0509d3217039?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
  img.setAttribute('alt', '');

  main.appendChild(h2);
  main.appendChild(img);

  content.appendChild(main);
}

export { pageLoader };