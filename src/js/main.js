import Jumper from './jumper.js';
import Scroll from './scroll.js';

// scroll handler defined in scroll.js
let s = new Scroll();
let j = new Jumper();

document.getElementById('how-it-works').addEventListener('click', function(){
  j.jump(document.querySelector('.split'));
});
