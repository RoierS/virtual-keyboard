import './keyboard.css';



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

const createElement = (tagName, className) => {
  const newElement = document.createElement(tagName);
  newElement.classList.add(className);
  return newElement;
}

const createkeyboard = () => {
  const keyboardContainer = createElement('div', 'keyboard__container');
  const textArea = createElement('div', 'text-area__wrapper');
  const textAreaInput = createElement('textarea', 'text-area');
  const keyboard = createElement('div', 'keyboard');

  // let isShifted = false;

  // const currentLayout = isShifted ? keyboardLayout.engShift : keyboardLayout.eng;
  const currentLayout = keyboardLayout.eng;

  currentLayout.forEach((row) => {
    const rowElement = createElement('div', 'keyboard__row');

    row.forEach((key) => {
      const keyElement = createElement('button', 'keyboard__key');
      
      keyElement.textContent = key;
      if (key === ' ') {
        keyElement.classList.add('keyboard__key--space');
      }
      if (key === 'Tab') {
        keyElement.classList.add('keyboard__key--tab');
      }
      if (key === 'Shift') {
        keyElement.classList.add('keyboard__key--shift');
      }
      if (key === 'Caps Lock') {
        keyElement.classList.add('keyboard__key--caps');
      }
      if (key === 'Enter') {
        keyElement.classList.add('keyboard__key--enter');
      }
      if (key === 'Alt') {
        keyElement.classList.add('keyboard__key--alt');
      }
      if (key === 'Up') {
        keyElement.classList.add('keyboard__key--up');
      }
      if (key === 'Down') {
        keyElement.classList.add('keyboard__key--down');
      }
      if (key === 'Left') {
        keyElement.classList.add('keyboard__key--left');
      }
      if (key === 'Right') {
        keyElement.classList.add('keyboard__key--right');
      }
      if (key === 'Cmd') {
        keyElement.classList.add('keyboard__key--cmd');
      }

      keyboard.appendChild(rowElement);
      rowElement.appendChild(keyElement);
      // isShifted = true;
    });
  });
  document.body.append(keyboardContainer);
  keyboardContainer.appendChild(textArea);
  textArea.appendChild(textAreaInput);
  keyboardContainer.appendChild(keyboard);
};

export { createkeyboard, keyboardLayout, createElement };
