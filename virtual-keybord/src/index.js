import './style.css';
import './components/keyboard.css';
import { keyboardInputHandler } from './components/keyboard-handler';

const keys = document.querySelectorAll('.keyboard__key');
document.addEventListener('keydown', keyboardInputHandler);

document.addEventListener('keyup', () => {
  keys.forEach((key) => {
    key.classList.remove('active');
  });
});
document.addEventListener('keydown', (e) => {
  keys.forEach((key) => {
    if (e.key === key.id) {
      key.classList.add('active');
    } 
  })
});
