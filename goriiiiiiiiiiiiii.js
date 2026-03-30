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
      <li class="first">Вид на горы</li>
      <li>Поздний check-out</li>
      <li>Бесплатный Wi-Fi и кофе</li>
      <li>Доступ к rooftop лаунжу</li>
    `;
    package2.innerHTML = `
      <li class="first">Вид на горы</li>
      <li>Завтрак и коктейли включены</li>
      <li>Мастер-классы и активности</li>
      <li>Персональный гид</li>
    `;
  } else {
    package1.innerHTML = `
      <li class="first">Вид на море</li>
      <li>Поздний check-out</li>
      <li>Бесплатный Wi-Fi и кофе</li>
      <li>Доступ к rooftop лаунжу</li>
    `;
    package2.innerHTML = `
      <li class="first">Вид на море</li>
      <li>Завтрак и коктейли включены</li>
      <li>Мастер-классы и активности</li>
      <li>Персональный гид</li>
    `;
  }
});