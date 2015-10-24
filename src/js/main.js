/*
.split
.split-description
.split-details
*/

const spacing = 90;
let scrollBuffer = 0;
let dir;

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY;

  scrollPos > scrollBuffer ?
    dir = 'down' :
    dir = 'up';

  scrollBuffer = scrollPos
  let rect = document.querySelector('.split-details').getBoundingClientRect();
  let el = document.querySelector('.split-description');

  let offset = window.innerHeight - el.getBoundingClientRect().height


  if (dir === 'down') {
    if (scrollPos >= scrollPos + rect.top) {
      el.style.position = 'fixed'
    }

    offset = window.innerHeight - el.getBoundingClientRect().bottom

    if (window.innerHeight > rect.bottom + offset) {
      el.style.position = 'absolute';
      el.style.top = 'initial';
      el.style.bottom = '0'
    }
  }

  if (dir === 'up') {
    if (window.innerHeight - rect.bottom < 0) {
      el.style.position = 'fixed';
      el.style.top = 'initial';
      el.style.bottom = '0'
    }

    if (rect.top - offset > 0) {
      el.style.position = 'absolute';
      el.style.top = '0';
      el.style.bottom = 'initial'
    }
  }


  // difference = window.innerHeight - $0.getBoundingClientRect().height


  // // on down rect.bottom - window.innerHeight < -120 &&
  // if (rect.bottom - window.innerHeight < -120) {
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
