import './keybord.css';

function createElement(tagName, className) {
  const newElement = document.createElement(tagName);
  newElement.classList.add(className);
  return newElement;
}
const createKeybord = (container) => {
  const keybordLayout = [
    ['§', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
    ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
    ['Ctrl', 'Alt', 'Command', 'Space', 'Command', 'Alt', 'Left', 'Up', 'Down', 'Right'],
  ];

  const keybord = createElement('div', 'keybord');

  keybordLayout.forEach((row) => {
    const rowElement = createElement('div', 'keybord__row');

    row.forEach((key) => {
      const keyElement = createElement('button', 'keybord__key');
      keyElement.textContent = key;
      const keyPressed = (event) => {
        console.log(event.key);
      };
      keyElement.addEventListener('click', keyPressed);
      rowElement.appendChild(keyElement);
    });

    keybord.appendChild(rowElement);
  });
  container.appendChild(keybord);
};

export { createKeybord };