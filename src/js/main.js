let els = [].slice.call(document.querySelectorAll('.split'));

window.addEventListener('scroll', () => {
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
});
