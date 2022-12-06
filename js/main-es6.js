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
    const menuLinks = document.querySelectorAll('.header__link')
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    } );
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    })
}());

// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        // если header не следует со скролом экрана, то надо удалить след.строку и строку, где используется переменная
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        // функция-обработчки скрола(бывают еще ease in, out, liner)
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        // функция анимации скрола
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    //обработчик событий, чтобы по клику срабатывала smoothScroll
    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

