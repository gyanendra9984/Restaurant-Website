let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shopingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}
let shopingcart = document.querySelector('.shoping-cart')

document.querySelector('#cart-btn').onclick = () => {
    searchForm.classList.remove('active');
    shopingcart.classList.toggle('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}
let loginform= document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () => {
    searchForm.classList.remove('active');
    shopingcart.classList.remove('active');
    loginform.classList.toggle('active');
    navbar.classList.remove('active');
}
let navbar= document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    searchForm.classList.remove('active');
    shopingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    searchForm.classList.remove('active');
    shopingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}
