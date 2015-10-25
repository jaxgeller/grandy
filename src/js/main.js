/*
.split
.split-description
.split-details
*/

const spacing = 90;
let scrollBuffer = 0;
let dir;
let els = [].slice.call(document.querySelectorAll('.split'));

window.addEventListener('scroll', () => {
  els.forEach(item => {
    let rect = item.getBoundingClientRect();
    let top = rect.top + window.scrollY;

    let el = item.querySelector('.split-description');
    let coordinator = item.querySelector('.split-details');
    if (window.scrollY > top && window.scrollY < top + rect.height) {
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
});
