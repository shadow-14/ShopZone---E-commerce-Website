const mobileMenuBtnElement = document.getElementById('mobile-menu-btn');
const mobileMenuElement = document.getElementById('mobile-menu');

function toggleMobileMenu() {
    // if(mobileMenuElement.style.display === 'none'){
    //     mobileMenuElement.style.display === 'block'
    // }
    // else{
    //     mobileMenuElement.style.display === 'none'
    // }

  mobileMenuElement.classList.toggle('open');
}

mobileMenuBtnElement.addEventListener('click', toggleMobileMenu);