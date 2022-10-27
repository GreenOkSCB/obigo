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
