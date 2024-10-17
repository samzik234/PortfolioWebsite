// const button = document.querySelector(".title button");
// button.addEventListener("click");
// button.style.color="white"
// button.style.backgroundColor="orange" button.style.borderRadius="10px  20px" button.style.padding="10px"
//  button.style.fontSiz="16px"
//  button.style.cursor="pointer"
//  button.style.transition="all 0.3s ease;"
//  button="hover backgroundColor: #14213d"

const menu_btn = document.querySelector('.hamburger');
const mobile_menu  = document.querySelector('.mobile-nav');
menu_btn.addEventListener('click', function() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');

  

});

