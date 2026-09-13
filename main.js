const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const publicationToggle = document.querySelector('.publication-toggle');
const publicationList = document.querySelector('.publication-list');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    navigation.classList.toggle('is-open', !open);
  });

  navLinks.forEach((link) => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  }));
}

if (publicationToggle && publicationList) {
  publicationToggle.addEventListener('click', () => {
    const expanded = publicationToggle.getAttribute('aria-expanded') === 'true';
    publicationToggle.setAttribute('aria-expanded', String(!expanded));
    publicationToggle.innerHTML = expanded
      ? 'Show all listed publications <span aria-hidden="true">↓</span>'
      : 'Show selected publications only <span aria-hidden="true">↑</span>';
    publicationList.classList.toggle('is-expanded', !expanded);
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();
