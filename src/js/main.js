/*
.split
.split-description
.split-details
*/


window.addEventListener('scroll', () => {
  let rect = document.querySelector('.split-details').getBoundingClientRect();
  let top = window.scrollY + rect.top;

  let el = document.querySelector('.split-description');

  // if (window.scrollY < top) {
  //   el.style.position = "absolute";
  //   el.style.top = "0";
  //   el.style.bottom = "initial";
  // }

  // if (window.scrollY > top) {
  //   el.style.position = "fixed";
  //   el.style.top = "0";
  //   el.style.bottom = "90px";
  // }

  // if (rect.bottom - window.innerHeight < -90) {
  //   el.style.position = "absolute";
  //   el.style.bottom = "90px";
  //   el.style.top = "initial";
  // }


  // bottom
  // $0.getBoundingClientRect().bottom - window.innerHeight
});
