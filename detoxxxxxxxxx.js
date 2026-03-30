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
    alert('Спасибо за бронирование,менеджер скоро свяжется с вами');
  });
});

// Переключатель меню
const switchInput = document.getElementById('menuSwitch');

switchInput.addEventListener('change', () => {
  const package1 = document.getElementById('package1');
  const package2 = document.getElementById('package2');

  if (switchInput.checked) {
    package1.innerHTML = `
      <li class="first">Отдельный домик в лесу</li>
      <li>Персональные практики и медитации</li>
      <li>Полное питание</li>
      <li>Цифровой детокс-программа с наставником</li>
    `;
    package2.innerHTML = `
      <li class="first">Отдельный домик в лесу</li>
      <li>Персональные практики и медитации</li>
      <li>Полное питание</li>
      <li>Цифровой детокс-программа с наставником</li>
    `;
  } else {
    package1.innerHTML = `
      <li class="first">Проживание в глэмпинг-палатке</li>
      <li>Общая зона отдыха</li>
      <li>Утренняя йога</li>
      <li>Чай и лёгкие перекусы</li>
    `;
    package2.innerHTML = `
      <li class="first">Проживание в глэмпинг-палатке</li>
      <li>Общая зона отдыха</li>
      <li>Утренняя йога</li>
      <li>Чай и лёгкие перекусы</li>
    `;
  }
});


