import Reveal from 'reveal.js';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';
import './style.css';

import { slides } from './slides/index.js';

// Inject slides into the DOM
const container = document.querySelector('.slides');
container.innerHTML = slides.join('\n');

const deck = new Reveal({
  hash: true,
  slideNumber: true,
  progress: true,
  transition: 'slide',
  transitionSpeed: 'fast',
  controls: true,
  center: false,
  // width: 960,
  // height: 700,
});

deck.initialize();
