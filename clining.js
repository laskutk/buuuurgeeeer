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
    alert('Спасибо за заказ,менеджер скоро свяжется с вами');
  });
});

// Переключатель меню
const switchInput = document.getElementById('menuSwitch');

switchInput.addEventListener('change', () => {
  const package1 = document.getElementById('package1');
  const package2 = document.getElementById('package2');

  if (switchInput.checked) {
    package1.innerHTML = `
      <li class="first">Влажная уборка</li>
      <li>Сухая уборка</li>
      <li>Уборка за животными</li>
      <li>*Без ванной комнаты</li>
    `;
    package2.innerHTML = `
      <li class="first">Влажная уборка</li>
      <li>Суухая уборка</li>
      <li>Уборка за животными</li>
      <li>Чистка ванной комнаты</li>
    `;
  } else {
    package1.innerHTML = `
      <li class="first">Влажная уборка</li>
      <li>Сухая уборка</li>
      <li>Вынос мусора</li>
      <li>*Без ванной комнаты</li>
    `;
    package2.innerHTML = `
      <li class="first">Влажная уборка</li>
      <li>Суухая уборка</li>
      <li>Вынос мусора</li>
      <li>Чистка ванной комнаты</li>
    `;
  }
});