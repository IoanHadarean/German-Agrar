// Declare variables
var toggleMenu = document.getElementsByClassName('toggle__menu')[0];
var navHeader = document.getElementsByClassName('header__nav')[0];
var servicesHeader = document.getElementsByClassName("services__range")[0];
var servicesImage = document.getElementsByClassName("services__image")[0];
var servicesDarken = document.getElementsByClassName("services__darken")[0];
var navItems = document.getElementsByClassName("nav__items")[0];
var navBox = document.getElementsByClassName("nav__box")[0];
var navCheckbox = document.getElementsByClassName("nav__checkbox")[0];


// Function for toggling menu on mobile
toggleMenu.addEventListener('click', function (e) {
    x = servicesHeader.style.visibility;
    if (x === 'visible' || x === '') {
        navItems.classList.add('nav__items--active');
        navBox.classList.add('nav__box--active');
        navHeader.classList.add('header__nav--active'); 
        navHeader.classList.add('translateBottom');   
        navHeader.classList.remove('translateTop');
        toggleMenu.style.transform = 'rotate(180deg)';
        servicesHeader.style.visibility = "hidden";
        servicesImage.style.visibility = "hidden";
        servicesDarken.style.visibility = "hidden"; 
    }
    else {
        navHeader.classList.add('translateTop');
        navHeader.classList.remove('translateBottom');
        navHeader.style.zIndex = '9';
        toggleMenu.style.transform = 'rotate(90deg)';
        servicesHeader.style.visibility = "visible";
        servicesImage.style.visibility = "visible";
        servicesDarken.style.visibility = "visible";
    }
    e.preventDefault();
});










