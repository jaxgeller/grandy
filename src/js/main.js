/*
.split
.split-description
.split-details
*/

const spacing = 90;
let scrollBuffer = 0;

window.addEventListener('scroll', () => {
  let rect = document.querySelector('.split-details').getBoundingClientRect();
  let el = document.querySelector('.split-description');
  let scrollPos = window.scrollY;

  let buffer = 0;

  if (scrollPos > scrollBuffer) {
    buffer = -1 * 120;
  }

  scrollBuffer = scrollPos

  // // if inside div
  // if (scrollPos >= scrollPos + rect.top) {
  //   el.style.position = 'fixed'
  // }

  // // on down rect.bottom - window.innerHeight < -120 &&
  // if (rect.bottom - window.innerHeight < buffer) {
  //   el.style.position = 'absolute'
  //   el.style.bottom = '0'
  //   el.style.top  = 'initial'
  // }

  // // going to top
  // if (scrollPos < scrollPos + rect.top -el.getBoundingClientRect().top ) {
  //   el.style.position = 'absolute'
  //   el.style.bottom = 'initial'
  //   el.style.top  = '0'
  // }
});
