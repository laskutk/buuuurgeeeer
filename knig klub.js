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
      <li class="first">8 книг</li>
      <li>Три встречи</li>
      <li>Мини-набор закладок</li>
      <li>Доступ к обсуждениям</li>
    `;
    package2.innerHTML = `
      <li class="first">15 книг</li>
      <li>6 встреч</li>
      <li>Большой набор читателя</li>
      <li>Доступ к эксклюзивам</li>
    `;
  } else {
    package1.innerHTML = `
      <li class="first">1 книга в неделю</li>
      <li>Доступ к обсуждениям</li>
      <li>Подборка рекомендаций</li>
      <li>Онлайн-встреча с клубом</li>
    `;
    package2.innerHTML = `
      <li class="first">3 книги в неделю</li>
      <li>Чек-лист</li>
      <li>2 онлайн-встречи</li>
      <li>Доступ к секретным файлам</li>
    `;
  }
});