import { createkeyboard, keyboardLayout } from './keyboard';

const keys = document.querySelectorAll('.keyboard__key');
const textInputArea = document.querySelector('.text-area');
let isShiftPressed = false;
let CapsPressed = false;
let MetaPressed = false;
let currentLayout = keyboardLayout.eng;

const clickedKey = document.querySelectorAll('.keyboard__key');

clickedKey.forEach((key) => {
  key.addEventListener('click', (e) => {
    switch (key.id) {
      case 'Tab':
        textInputArea.textContent += '    ';
        break;
      case 'Caps Lock':
        textInputArea.textContent += '';
        break;
      case 'Shift':
        textInputArea.textContent += '';
        break;
      case 'Ctrl':
        textInputArea.textContent += '';
        break;
      case 'Alt':
        textInputArea.textContent += '';
        break;
      case 'Backspace':
        textInputArea.textContent += textInputArea.textContent.slice(-1, 0);
        break;
      case 'Cmd':
        textInputArea.textContent += '';
        break;
      case 'Enter':
        textInputArea.textContent += '';
        break;
      case 'Right':
        textInputArea.textContent += '';
        break;
      case 'Left':
        textInputArea.textContent += '';
        break;
      case 'Down':
        textInputArea.textContent += '';
        break;
      case 'Up':
        textInputArea.textContent += '';
        break;
      default:
        textInputArea.textContent += e.target.id;
        break;
    }
  });
});

const keyboardInputHandler = (event) => {
  const keyMap = {
    Backspace: 'Backspace',
    Tab: 'Tab',
    Enter: 'Enter',
    ShiftLeft: 'Shift',
    ShiftRight: 'Shift',
    ControlLeft: 'Ctrl',
    ControlRight: 'Ctrl',
    AltLeft: 'Alt',
    AltRight: 'Alt',
    CapsLock: 'Caps lock',
    Space: ' ',
    ArrowLeft: '←',
    ArrowUp: '↑',
    ArrowRight: '→',
    ArrowDown: '↓',
    Delete: 'Del',
  };
  const pressedKey = event.key;

  const specialKey = keyMap[event.code];

  keys.forEach((key) => {
    if (event.key === key.id) {
      key.classList.add('active');
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      isShiftPressed = !isShiftPressed;
      currentLayout = isShiftPressed ? keyboardLayout.engShift : keyboardLayout.eng;
      createkeyboard(currentLayout);
      return;
    }
    if (event.code === 'CapsLock') {
      CapsPressed = !CapsPressed;
      currentLayout = CapsPressed ? keyboardLayout.engShift : keyboardLayout.eng;
      createkeyboard(currentLayout);
      return;
    }
    if (event.code === 'MetaLeft') {
      MetaPressed = !MetaPressed;
      currentLayout = MetaPressed ? keyboardLayout.ru : keyboardLayout.eng;
      createkeyboard(currentLayout);
      if (event.key === key.id) {
        key.classList.add('active');
      }
      return;
    }

    if (isShiftPressed) {
      if ((pressedKey === key.textContent.toLowerCase())) {
        textInputArea.textContent += key.textContent.toUpperCase();
        currentLayout = keyboardLayout.eng;
        isShiftPressed = false;
        createkeyboard(currentLayout);
      }
    } else if (pressedKey === key.textContent.toUpperCase()
               && specialKey !== 'Shift') {
      textInputArea.textContent += key.textContent.toLowerCase();
    } else if (pressedKey === key.textContent.toLowerCase()
               && specialKey !== 'Shift') {
      textInputArea.textContent += key.textContent;
    }
  });
};

// eslint-disable-next-line import/prefer-default-export
export { keyboardInputHandler };
