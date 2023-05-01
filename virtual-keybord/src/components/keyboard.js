const createElement = (tagName, className) => {
  const newElement = document.createElement(tagName);
  newElement.classList.add(className);
  return newElement;
};

const wrapper = createElement('div', 'wrapper');
const header = createElement('header', 'header');
const headerTitle = createElement('h1', 'header__title');
const footer = createElement('footer', 'footer');
const keyboardContainer = createElement('main', 'keyboard__container');
const textArea = createElement('section', 'text-area__wrapper');
const textAreaInput = createElement('textarea', 'text-area');
const keyboard = createElement('section', 'keyboard');
const info = createElement('p', 'footer__info');
const langSwitch = createElement('p', 'footer__lang-switch');
headerTitle.textContent = 'Virtual Keybord';
info.textContent = 'The keyboard was created in MacOS';
langSwitch.textContent = 'To switch language press "Left Cmd"';

document.body.append(wrapper);
wrapper.append(header);
wrapper.append(keyboardContainer);
wrapper.append(footer);
footer.append(info);
footer.append(langSwitch);
keyboardContainer.appendChild(textArea);
textArea.appendChild(textAreaInput);
keyboardContainer.appendChild(keyboard);
header.appendChild(headerTitle);

const keyboardLayout = {
  eng: [
    ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
    ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up', 'Shift'],
    ['Ctrl', 'Alt', 'Cmd', ' ', 'Cmd', 'Alt', 'Left', 'Down', 'Right'],
  ],
  engShift: [
    ['±', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}'],
    ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
    ['Shift', '~', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Up', 'Shift'],
    ['Ctrl', 'Alt', 'Cmd', ' ', 'Cmd', 'Alt', 'Left', 'Down', 'Right'],
  ],
  ru: [
    ['>', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
    ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['Shift', ']', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'Up', 'Shift'],
    ['Ctrl', 'Alt', 'Cmd', ' ', 'Cmd', 'Alt', 'Left', 'Down', 'Right'],
  ],
  ruShift: [
    ['<', '!', '"', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ'],
    ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', '[', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '?', 'Up', 'Shift'],
    ['Ctrl', 'Alt', 'Cmd', ' ', 'Cmd', 'Alt', 'Left', 'Down', 'Right'],
  ],
};

const currentLayout = keyboardLayout.eng;
const createkeyboard = (layout) => {
  keyboard.innerHTML = '';
  layout.forEach((row) => {
    const rowElement = createElement('div', 'keyboard__row');
    row.forEach((key) => {
      const keyElement = createElement('button', 'keyboard__key');
      keyElement.textContent = key;
      if (key === ' ') {
        keyElement.classList.add('keyboard__key--space');
      }
      keyElement.setAttribute('id', key);
      switch (key) {
        case 'Backspace':
          keyElement.innerHTML = '<i class="material-icons">backspace</i>';
          break;
        case 'Left':
          keyElement.innerHTML = '<i class="material-icons">arrow_left</i>';
          break;
        case 'Right':
          keyElement.innerHTML = '<i class="material-icons">arrow_right</i>';
          break;
        case 'Down':
          keyElement.innerHTML = '<i class="material-icons">arrow_drop_down</i>';
          break;
        case 'Up':
          keyElement.innerHTML = '<i class="material-icons">arrow_drop_up</i>';
          break;
        default:
          break;
      }
      rowElement.appendChild(keyElement);
    });
    keyboard.appendChild(rowElement);
  });
  return keyboard;
};

createkeyboard(currentLayout);

export { createkeyboard, keyboardLayout };
