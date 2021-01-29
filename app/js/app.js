const add = document.querySelector('.clients__add');
const popup = document.querySelector('.popup');

add.addEventListener('click', () => {
  popup.style.opacity = '1';
  popup.style.pointerEvents = 'all';
});

const close = document.querySelector('.popup__close');

function closePopup() {
  popup.style.opacity = '0';
  popup.style.pointerEvents = 'none';
}

close.addEventListener('click', closePopup);

const cancel = document.querySelector('.popup__cancel');

cancel.addEventListener('click', closePopup);

const menuLink = document.querySelectorAll('.nav__link');

menuLink.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    menuLink.forEach((elem) => {
      elem.classList.remove('active');
    });

    item.classList.add('active');
  });
});

const leftIcon = document.querySelectorAll('.left__icon');

leftIcon.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    leftIcon.forEach((elem) => {
      elem.classList.remove('active');
    });

    item.classList.add('active');
  });
});

const menuCheckbox = document.querySelector('.menu__checkbox');
const navLayer = document.querySelector('.nav__layer');

menuCheckbox.addEventListener('change', () => {
  if (menuCheckbox.checked === true) {
    navLayer.onclick = () => {
      menuCheckbox.checked = false;
    };
  }
});

document.body.addEventListener('click', (event) => {
  if (event.target.classList.contains('nav__link')) {
    menuCheckbox.checked = false;
  }
});
