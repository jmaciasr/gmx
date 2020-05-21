$(document).ready(function () {
    var menuItems = $( '.nav__main--mob' )[0];
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        console.log(menuItems);
        menuItems.classList.toggle('show-menu');
    });
});
