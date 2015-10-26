import Jumper from './jumper.js';
import Scroll from './scroll.js';


new Scroll();









document.getElementById('how-it-works').addEventListener('click', function(){

  var jumper = new Jumper({
    duration: 1000,                     // ms
    offset: 0,                          // px
    callback: null,                     // function
    easing: function(t, b, c, d) {      // Robert Penner's easeInQuad
      return c * (t /= d) * t + b;
    }
  });

  jumper.jump(document.querySelector('.split'));

});
