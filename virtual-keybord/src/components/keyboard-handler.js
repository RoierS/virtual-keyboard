import { createkeyboard, keyboardLayout } from './keyboard';

const keys = document.querySelectorAll('.keyboard__key');
const textInputArea = document.querySelector('.text-area');
let isShiftPressed = false;
let CapsPressed = false;
let MetaPressed = false;
let currentLayout = keyboardLayout.eng;


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
    // if (event.key === key.id) {
    //   key.classList.add('active');
    // }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      isShiftPressed = !isShiftPressed;
      currentLayout = isShiftPressed ? keyboardLayout.engShift : keyboardLayout.eng;
      createkeyboard(currentLayout);
      // key.classList.add('active');
      return;
    }
    if (event.code === 'CapsLock') {
      CapsPressed = !CapsPressed;
      currentLayout = CapsPressed ? keyboardLayout.engShift : keyboardLayout.eng;
      createkeyboard(currentLayout);
      return;
    }
    if (event.code === 'MetaLeft') {
      // key.classList.add('active');
      MetaPressed = !MetaPressed;
      currentLayout = MetaPressed ? keyboardLayout.ru : keyboardLayout.eng;
      createkeyboard(currentLayout);
      // if (event.key === key.id) {
      //   key.classList.add('active');
      // }
      return;
    }


    // if ()



    if (isShiftPressed) {
      if ((pressedKey === key.textContent.toLowerCase())) {
        textInputArea.textContent += key.textContent.toUpperCase();
        currentLayout = keyboardLayout.eng;
        isShiftPressed = false;
        createkeyboard(currentLayout);
        if (event.key === key.id) {
          console.log(event.key)
          console.log(key.id)
          console.log(key)
        }
      }
    } else if (pressedKey === key.textContent.toUpperCase()
               && specialKey !== 'Shift') {
      // if (event.key === key.id) {
      //   key.classList.add('active');
      // }
      textInputArea.textContent += key.textContent.toLowerCase();
      
    } else if (pressedKey === key.textContent.toLowerCase()
               && specialKey !== 'Shift') {
      // key.classList.add('active');
      // if (event.key === key.id) {
      //   key.classList.add('active');
      // }
      textInputArea.textContent += key.textContent;
    }
  });
  // console.log(`pressedKey(event.key): ${pressedKey}`);
  // console.log(`event.code: ${event.code}`);
  // console.log(`specialKey(event.code): ${specialKey}`);
};
export { keyboardInputHandler };
