export default function footer() {
  const content = document.querySelector('#content');

  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footer');
  
  const p = document.createElement('p');
  p.textContent = 'Made with ❤️ by ArthurMTS';

  footer.appendChild(p);

  content.appendChild(footer);
} 