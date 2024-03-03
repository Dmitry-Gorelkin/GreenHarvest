const refs = {
  openMenu: document.querySelector('[data-menu-open-js]'),
  closeMmenu: document.querySelector('[data-menu-close-js]'),
  menu: document.querySelector('[data-menu-js]'),
  menuBlock: document.querySelector('[data-menu-block-js]'),
};

const openMenu = () => {
  refs.menu.classList.remove('is-hidden');

  refs.menu.classList.add('open');
  refs.menu.classList.remove('close');

  refs.menuBlock.classList.add('open');
  refs.menuBlock.classList.remove('close');

  refs.closeMmenu.addEventListener('click', closeMenu);
  refs.menu.addEventListener('click', closeMenuByClick);
  document.addEventListener('keydown', closeKeyboardClick);
};

const closeMenu = () => {
  refs.menu.classList.remove('open');
  refs.menu.classList.add('close');

  refs.menuBlock.classList.remove('open');
  refs.menuBlock.classList.add('close');

  refs.closeMmenu.removeEventListener('click', closeMenu);
  refs.menu.removeEventListener('click', closeMenuByClick);
  document.removeEventListener('keydown', closeKeyboardClick);
};

const closeKeyboardClick = e => {
  if (e.code === 'Escape') {
    closeMenu();
  }
};

const closeMenuByClick = e => {
  if (e.target.attributes['data-menu-js']) {
    closeMenu();
  }
  if (e.target.attributes['href']) {
    closeMenu();
  }
};

refs.openMenu.addEventListener('click', openMenu);
