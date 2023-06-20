// Ожидаем полной загрузки окна перед выполнением кода
window.onload = function() {
  // Получаем ссылки на элементы страницы
  const runButton = document.getElementById('run-btn'); // Кнопка "run-btn"
  const htmlInput = document.getElementById('html-input'); // Поле ввода HTML-кода
  const cssInput = document.getElementById('css-input'); // Поле ввода CSS-кода
  const jsInput = document.getElementById('js-input'); // Поле ввода JavaScript-кода
  const outputFrame = document.getElementById('output'); // Фрейм вывода результата

  // Добавляем обработчик события 'click' на кнопку "run-btn"
  runButton.addEventListener('click', function() {
    // Получаем значения HTML, CSS и JavaScript кодов из соответствующих полей ввода
    const html = htmlInput.value;
    const css = `<style>${cssInput.value}</style>`;
    const js = `<script>${jsInput.value}<\/script>`;

    // Устанавливаем содержимое фрейма outputFrame равным комбинации HTML, CSS и JavaScript кодов
    outputFrame.contentDocument.body.innerHTML = html + css + js;
  });
}