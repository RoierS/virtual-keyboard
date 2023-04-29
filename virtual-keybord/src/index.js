import './style.css';
import { createkeyboard, keyboardLayout, createElement } from './components/keyboard';

createkeyboard();

const keys = document.querySelectorAll('.keyboard__key');
const textInputArea = document.querySelector('.text-area');

const keyboardInputHandler = (event) => {
  const keyMap = {
    'Backspace': 'Backspace',
    'Tab': 'Tab',
    'Enter': 'Enter',
    'ShiftLeft': 'Shift',
    'ShiftRight': 'Shift',
    'ControlLeft': 'Ctrl',
    'ControlRight': 'Ctrl',
    'AltLeft': 'Alt',
    'AltRight': 'Alt',
    'CapsLock': 'Caps lock',
    'Space': ' ',
    'ArrowLeft': '←',
    'ArrowUp': '↑',
    'ArrowRight': '→',
    'ArrowDown': '↓',
    'Delete': 'Del'
  };
  
  const pressedKey = event.key;

  textInputArea.textContent += pressedKey;
  
  
  keys.forEach((key) => {
    if (key.textContent === pressedKey) {
      key.classList.add('active');
    }
  })



  const specialKey = keyMap[event.code];

  const isShiftPressed = event.shiftKey;

  const layout = isShiftPressed ? keyboardLayout.engShift : keyboardLayout.eng;
  
  
 
  // keys.forEach((key) => {

  //   if (key.textContent === specialKey) {
  //     key.classList.add('active');
  //   } else if (key.textContent.toLowerCase() === pressedKey) {
  //     key.classList.add('active');
  //     textInputArea.textContent += pressedKey;
  //   } else if (event.code === 'Space') {
  //     textInputArea.innerHTML += ' ';
  //   }
  // })

  // const keyboard = document.querySelector('.keyboard');
  // keyboard.parentNode.removeChild(keyboard);

  // const newKeyboard = createElement('div', 'keyboard');
  
  // layout.forEach((row) => {
  //   const rowElement = createElement('div', 'keyboard__row');

  //   row.forEach((key) => {
  //     const keyElement = createElement('button', 'keyboard__key');
  //     keyElement.textContent = key;
  //     if (key === ' ') {
  //       keyElement.classList.add('keyboard__key--space');
  //     }
  //     if (key === 'Tab') {
  //       keyElement.classList.add('keyboard__key--tab');
  //     }
  //     if (key === 'Shift') {
  //       keyElement.classList.add('keyboard__key--shift');
  //     }

  //     newKeyboard.appendChild(rowElement);
  //     rowElement.appendChild(keyElement);
  //   });
  // });


  // const keyboardContainer = document.querySelector('.keyboard__container');
  // keyboardContainer.appendChild(newKeyboard);

  

  console.log(`pressedKey(event.key): ${pressedKey}`);
  console.log(`event.code: ${event.code}`);
  console.log(`specialKey(event.code): ${specialKey}`);
  

};


document.addEventListener('keydown', keyboardInputHandler);

document.addEventListener('keyup', () => {
  keys.forEach((key) => {
    key.classList.remove('active');
  });
});



