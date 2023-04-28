import './style.css';
import { createKeybord } from './components/keybord';

const keybordContainer = document.createElement('div');
keybordContainer.classList.add('keybord__container');
createKeybord(keybordContainer);
document.body.append(keybordContainer);
