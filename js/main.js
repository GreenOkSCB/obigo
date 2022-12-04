// https://www.youtube.com/watch?v=L5_vyBTKxso&list=PL5_s7xdj2Vsw-bCx5nOZJMFIiHwRgok--&index=6&ab_channel=SteptoWeb
// самое начало видео, подключение background для header
(function (){

    const header = document.querySelector('.header');
    const header__wrapper = document.querySelector('.header__wrapper');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
            header__wrapper.classList.add('header__wrapper_active');
        } else {
            header.classList.remove('header_active');
            header__wrapper.classList.remove('header__wrapper_active');
        }
    }

}());


// https://www.youtube.com/watch?v=Na_pwlz47P4&list=PL5_s7xdj2Vsw-bCx5nOZJMFIiHwRgok--&index=7&ab_channel=SteptoWeb
// бургер меню
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    } );
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    })
}());

// $('.menu').on('click',function() {
//     $('body').toggleClass('fixed');
//   });
