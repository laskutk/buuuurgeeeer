// Находим кнопку Заказать
const orderButton = document.querySelector('header button');

// Находим блок меню
const menuBlock = document.getElementById('packages');

// Плавный скролл к меню при клике
orderButton.addEventListener('click', () => {
  menuBlock.scrollIntoView({ behavior: 'smooth' });
});

// Все кнопки "Выбрать"
const chooseButtons = document.querySelectorAll('.package-container .button');

chooseButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // чтобы ссылка не прыгала
    alert('Товар добавлен в корзину');
  });
});

// Переключатель меню
const switchInput = document.getElementById('menuSwitch');

switchInput.addEventListener('change', () => {
  const package1 = document.getElementById('package1');
  const package2 = document.getElementById('package2');

  if (switchInput.checked) {
    package1.innerHTML = `
      <li class="first">Маргарита</li>
      <li>Добрый кола 2л</li>
      <li>Картофель фри</li>
      <li>Наггетсы</li>
    `;
    package2.innerHTML = `
      <li class="first">Мясная</li>
      <li>Добрый кола 3л</li>
      <li>Картофель фри</li>
      <li>Крылья барбекью</li>
    `;
  } else {
    package1.innerHTML = `
      <li class="first">Маргарита</li>
      <li>Пепперони</li>
      <li>Добрый кола 1л</li>
      <li>Картофель фри</li>
    `;
    package2.innerHTML = `
      <li class="first">Мясная</li>
      <li>Гавайская</li>
      <li>Добрый кола 2л</li>
      <li>Наггетсы</li>
    `;
  }
});