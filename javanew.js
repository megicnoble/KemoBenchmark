let text = document.getElementById('text');
let anilogo = document.getElementById('anilogo');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.left = value * -1.5 + 'px';
    anilogo.style.left = value * 1.5 + 'px';
    btn.style.marginLeft = value * -1.5 + 'px';
    p.style.left = value * -1.5 + 'px';
    
});

const menuIcon = document.getElementById('menu-icon');
const phonenav = document.querySelector('.phonenav');

menuIcon.addEventListener('click', () => {
  phonenav.style.right = phonenav.style.right === '0px' ? '-20em' : '0px';
});

animation.addEventListener('DOMLoaded', function () {
  animation.setSubframe(false);
  animation.setQuality('high');
  animation.setSize(300, 150);
});

