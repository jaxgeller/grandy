export default class Jumper {
  constructor(defaults = {}) {
    this.duration = defaults.duration || 1000
    this.offset = defaults.offset || 0
    this.callback = defaults.callback || undefined

    this.easing = defaults.easing || function(t, b, c, d) {
      // Robert Penner's easeInQuad - http://robertpenner.com/easing/
      return c * (t /= d) * t + b
    }
  }

  jump(target, overrides = {}) {
    this.jumpStart = window.pageYOffset

    this.jumpDuration = overrides.duration || this.duration
    this.jumpOffset = overrides.offset || this.offset
    this.jumpCallback = overrides.callback || this.callback
    this.jumpEasing = overrides.easing || this.easing

    this.jumpDistance = target.nodeType === 1
      ? this.jumpOffset + Math.round(target.getBoundingClientRect().top)
      : target

    requestAnimationFrame((time) => this._loop(time))
  }

  _loop(currentTime) {
    if(!this.timeStart) {
      this.timeStart = currentTime
    }

    this.timeElapsed = currentTime - this.timeStart
    this.jumpNext = this.jumpEasing(this.timeElapsed, this.jumpStart, this.jumpDistance, this.jumpDuration)

    window.scrollTo(0, this.jumpNext)

    this.timeElapsed < this.jumpDuration
      ? requestAnimationFrame((time) => this._loop(time))
      : this._end()
  }

  _end() {
    window.scrollTo(0, this.jumpStart + this.jumpDistance)

    typeof this.jumpCallback === 'function' && this.jumpCallback.call()
    this.timeStart = false
  }
}

let els = [].slice.call(document.querySelectorAll('.split'));

window.addEventListener('scroll', () => {
  if (window.innerHeight > 860) {
    els.forEach(item => {
      let windowPos = window.scrollY;
      let rect = item.getBoundingClientRect();
      let top = rect.top + windowPos;

      let el = item.querySelector('.split-description');
      let coordinator = item.querySelector('.split-details');

      if (windowPos > top && windowPos < top + rect.height) {
        el.style.position = 'fixed';
        el.style.top = 0;
        el.style.bottom = 'initial';

        if (coordinator.getBoundingClientRect().bottom - el.getBoundingClientRect().height <= 0) {
          el.style.position = 'absolute';
          el.style.bottom = 0;
          el.style.top = 'initial';
        }

      } else {
        el.style.position = 'absolute'
        el.style.bottom = 'initial'
        el.style.top = '0';
      }
    });
  }
});


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
