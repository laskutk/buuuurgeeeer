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
      <li class="first">Комбо Классика — 300 ₽</li>
      <li>Комбо Чизбургер — 320 ₽</li>
      <li>Комбо Двойной — 370 ₽</li>
      <li>Комбо XL — 400 ₽</li>
    `;
    package2.innerHTML = `
      <li class="first">Комбо Премиум — 450 ₽</li>
      <li>Комбо BBQ — 470 ₽</li>
      <li>Комбо Острый — 460 ₽</li>
      <li>Комбо XL — 500 ₽</li>
    `;
  } else {
    package1.innerHTML = `
      <li class="first">Классический бургер — 150 ₽</li>
      <li>Чизбургер — 170 ₽</li>
      <li>Двойной бургер — 220 ₽</li>
      <li>Комбо с картошкой — 250 ₽</li>
    `;
    package2.innerHTML = `
      <li class="first">Премиум бургер — 280 ₽</li>
      <li>BBQ бургер — 300 ₽</li>
      <li>Острый бургер — 290 ₽</li>
      <li>Комбо XL — 350 ₽</li>
    `;
  }
});