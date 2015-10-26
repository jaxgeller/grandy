export default class Scroll {
  constructor() {
    this.breakPoint = 860;
    this.elements = Array.prototype.slice.call(document.querySelectorAll('.split'));
    this.ticking = false;

    window.addEventListener('scroll', this.onScroll.bind(this));
  }


  onScroll() {
    if(!this.ticking && window.innerWidth > this.breakPoint) {
      requestAnimationFrame(this.update.bind(this));
      this.ticking = true;
    }
  }

  update() {
    this.elements.forEach(item => {
      let windowPos = window.scrollY;
      let rect = item.getBoundingClientRect();
      let top = rect.top + windowPos;

      this.el = item.querySelector('.split-description');
      let coordinator = item.querySelector('.split-details');

      if (windowPos > top && windowPos < top + rect.height) {
        this._setStyle('fixed', '0', 'initial');

        if (coordinator.getBoundingClientRect().bottom - this.el.getBoundingClientRect().height <= 0) {
          this._setStyle('absolute', 'initial', '0');
        }
      } else {
        this._setStyle('absolute', '0', 'initial');
      }

    });

    this.ticking = false;
  }

  _setStyle(position, top, bottom) {
    this.el.style.position = position;
    this.el.style.top = top;
    this.el.style.bottom = bottom;
  }
}
