function pageLoader() {
  const content = document.querySelector('#content');

  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  main.style.position = 'absolute';
  main.style.top = 0;
  main.style.width = '100%';
  main.style.height = '100vh';
  main.style.display = 'flex';
  main.style.flexDirection = 'column';
  main.style.alignItems = 'center';
  main.style.zIndex = -10;
  main.style.backgroundColor = '#252535';

  const h2 = document.createElement('h2');
  h2.textContent = 'Contact us!';
  h2.style.marginTop = '100px';
  h2.style.fontSize = '30px';
  h2.style.color = '#F7F7F7';

  const div = document.createElement('div');
  div.style.marginTop = '20px';
  div.style.color = 'rgb(255, 0, 119)';
  div.style.lineHeight = '1.7em';
  div.style.fontSize = '20px';
  div.style.backgroundColor = '#353545';
  div.style.padding = '20px';
  div.style.borderRadius = '5px';
  div.style.boxShadow = '5px 5px 10px #000';

  const email = document.createElement('p');
  email.textContent = 'Email: iamtheemail@contact.com.';

  const phone = document.createElement('p');
  phone.textContent = 'Phone: (00) 1234-5678.';

  div.appendChild(email);
  div.appendChild(phone);

  main.appendChild(h2);
  main.appendChild(div);

  content.appendChild(main);
}

export { pageLoader };