import './keybord.css';

const keys = [
  { value: '1', type: 'number' },
  { value: '2', type: 'number' },
  { value: '3', type: 'number' },
  { value: '4', type: 'number' },
  { value: '5', type: 'number' },
  { value: '6', type: 'number' },
  { value: '7', type: 'number' },
  { value: '8', type: 'number' },
  { value: '9', type: 'number' },
  { value: '0', type: 'number' },
  { value: 'Q', type: 'letter' },
  { value: 'W', type: 'letter' },
  { value: 'E', type: 'letter' },
  { value: 'R', type: 'letter' },
  { value: 'T', type: 'letter' },
  { value: 'Y', type: 'letter' },
  { value: 'U', type: 'letter' },
  { value: 'I', type: 'letter' },
  { value: 'O', type: 'letter' },
  { value: 'P', type: 'letter' },
  { value: 'A', type: 'letter' },
  { value: 'S', type: 'letter' },
  { value: 'D', type: 'letter' },
  { value: 'F', type: 'letter' },
  { value: 'G', type: 'letter' },
  { value: 'H', type: 'letter' },
  { value: 'J', type: 'letter' },
  { value: 'K', type: 'letter' },
  { value: 'L', type: 'letter' },
  { value: 'Z', type: 'letter' },
  { value: 'X', type: 'letter' },
  { value: 'C', type: 'letter' },
  { value: 'V', type: 'letter' },
  { value: 'B', type: 'letter' },
  { value: 'N', type: 'letter' },
  { value: 'M', type: 'letter' },
  { value: '<-', type: 'backspace' },
  { value: ' ', type: 'space' },
  { value: 'Enter', type: 'enter' },
  { value: 'Caps Lock', type: 'capslock' },
  { value: 'Shift', type: 'shift' },
  { value: 'Tab', type: 'tab' },
];

function createElement(tagName, className) {
  const newElement = document.createElement(tagName);
  newElement.classList.add(className);
  return newElement;
}

const keybordContainer = createElement('div', 'keybord__container');
const textArea = createElement('div', 'text-area__wrapper');
const textAreaInput = createElement('textarea', 'text-area');
const keybord = createElement('div', 'keybord');
document.body.append(keybordContainer);
keybordContainer.appendChild(textArea);
textArea.appendChild(textAreaInput);
keybordContainer.appendChild(keybord);

keys.forEach((key) => {
  const keyElement = createElement('button', 'keybord__key');
  keyElement.textContent = key.value;
  keyElement.addEventListener('click', () => {
    handleKeyClick(key);
  });
  keybord.appendChild(keyElement);
});

function handleKeyClick(key) {
  switch (key.type) {
    case 'number':
    case 'letter':
      textAreaInput.value += key.value;
      break;
    case 'backspace':
      textAreaInput.value = inputElement.value.slice(0, -1);
      break;
    case 'space':
      textAreaInput.value += ' ';
      break;
  
  }
}

export *;