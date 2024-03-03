const refsSlider = {
  prev: document.querySelector('[data-btn-prev-js]'),
  next: document.querySelector('[data-btn-next-js]'),
  slides: document.querySelector('[data-slide-js]'),
};

const prevSlide = () => {
  const arr = [...refsSlider.slides.children];
  const nextEl = arr.splice(-1, 1);
  refsSlider.slides.innerHTML = [...nextEl, ...arr].reduce((acc, e) => {
    return acc + e.outerHTML;
  }, '');

  refsSlider.slides.children[0].classList.add('mob');
  refsSlider.slides.children[1].classList.remove('mob');
  refsSlider.slides.children[2].classList.add('mob');

  refsSlider.slides.children[0].classList.remove('tablet');
  refsSlider.slides.children[1].classList.remove('tablet');
  refsSlider.slides.children[2].classList.add('tablet');
};

const nextSlide = () => {
  const arr = [...refsSlider.slides.children];
  const nextEl = arr.splice(0, 1);
  refsSlider.slides.innerHTML = [...arr, ...nextEl].reduce((acc, e) => {
    return acc + e.outerHTML;
  }, '');

  refsSlider.slides.children[0].classList.add('mob');
  refsSlider.slides.children[1].classList.remove('mob');
  refsSlider.slides.children[2].classList.add('mob');

  refsSlider.slides.children[0].classList.remove('tablet');
  refsSlider.slides.children[1].classList.remove('tablet');
  refsSlider.slides.children[2].classList.add('tablet');
};

refsSlider.prev.addEventListener('click', prevSlide);
refsSlider.next.addEventListener('click', nextSlide);
