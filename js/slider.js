const refsSlider = {
  prev: document.querySelector('[data-btn-prev-js]'),
  next: document.querySelector('[data-btn-next-js]'),
  slides: document.querySelector('[data-slide-js]'),
};

const prevSlide = () => {
  const [nextEl, ...arr] = [...refsSlider.slides.children].reverse();
  refsSlider.slides.innerHTML = [nextEl, ...arr.reverse()].reduce((acc, e) => {
    return acc + e.outerHTML;
  }, '');

  visibleMob();

  visibleTablet();

  activeAnimatePrev();
};

const nextSlide = () => {
  const [nextEl, ...arr] = refsSlider.slides.children;
  refsSlider.slides.innerHTML = [...arr, nextEl].reduce((acc, e) => {
    return acc + e.outerHTML;
  }, '');

  visibleMob();

  visibleTablet();

  activeAnimateNext();
};

const activeAnimateNext = () => {
  for (const slide of refsSlider.slides.children) {
    slide.classList.add('reviews-item-animateNext');
    slide.classList.remove('reviews-item-animatePrev');
  }
};

const activeAnimatePrev = () => {
  for (const slide of refsSlider.slides.children) {
    slide.classList.add('reviews-item-animatePrev');
    slide.classList.remove('reviews-item-animateNext');
  }
};

const visibleMob = () => {
  for (const slide of refsSlider.slides.children) {
    slide.classList.add('mob');
  }
  refsSlider.slides.children[0].classList.remove('mob');
};

const visibleTablet = () => {
  for (const slide of refsSlider.slides.children) {
    slide.classList.remove('tablet');
  }
  refsSlider.slides.children[2].classList.add('tablet');
};

refsSlider.prev.addEventListener('click', prevSlide);
refsSlider.next.addEventListener('click', nextSlide);
