const foods = [{
  name: 'Cake',
  description: 'Lorem ipsum.',
  price: 10,
  icon: '🍰'
}, 
{
  name: 'Ramen',
  description: 'Lorem ipsum.',
  price: 20,
  icon: '🍜'
},
{
  name: 'Sushi',
  description: 'Lorem ipsum.',
  price: 35,
  icon: '🍣'
},
{
  name: 'Curry',
  description: 'Lorem ipsum.',
  price: 25,
  icon: '🍛'
}];

export default function menu() {
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
  main.style.flexDirection = 'column'
  main.style.alignItems = 'center';
  main.style.zIndex = -10;
  main.style.backgroundColor = '#252535';

  const h2 = document.createElement('h2');
  h2.textContent = 'Choose wisely 😋';
  h2.style.fontSize = '30px';
  h2.style.marginTop = '100px';
  h2.style.textShadow = '5px 5px 10px #000';
  h2.style.color = '#F7F7F7';

  const div = document.createElement('div');
  div.setAttribute('id', 'foodList');
  div.style.marginTop = '20px';
  div.style.display = 'grid';
  div.style.gridTemplateColumns = 'repeat(3, 1fr)';
  div.style.gap = '20px';

  foods.forEach(food => div.appendChild(foodCard(food)));

  main.appendChild(h2);
  main.appendChild(div);

  content.appendChild(main);
}

function foodCard(food) {
  const card = document.createElement('div');
  card.style.backgroundColor = '#FFF';
  card.style.padding = '10px';
  card.style.borderRadius = '5px';
  card.style.width = '200px';
  card.style.textAlign = 'center';
  card.style.boxShadow = '5px 5px 10px #000';

  const name = document.createElement('strong');
  name.textContent = food.name;
  name.style.fontSize = '25px';
  name.style.marginLeft = '5px';

  const description = document.createElement('p');
  description.textContent = food.description;
  description.style.margin = '10px 0';
  description.style.fontStyle = 'italic';
  description.style.fontSize = '20px'

  const price = document.createElement('p');
  price.innerHTML = `<b>Price:</b> U$${food.price}.`;
  price.style.fontSize = '20px'

  const icon = document.createElement('span');
  icon.textContent = food.icon;
  icon.style.fontSize = '25px';

  card.appendChild(icon);
  card.appendChild(name);
  card.appendChild(description);
  card.appendChild(price);

  return card;
}