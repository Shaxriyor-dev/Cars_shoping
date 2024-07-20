const cart = document.querySelector('.cart');
const btn3 = document.querySelector('.btn3');
const btn2 = document.querySelector('.btn2');
const span =document.querySelector('.span');
const  barscart = document.querySelector('.bars-cart');
const  cartbody = document.querySelector('.cart-body');
const  conteiner = document.querySelectorAll('.bars-item');



btn3.addEventListener("click", ()=>{
    cart.classList.toggle('fon')
});

btn2.addEventListener('click' , ()=>{
    barscart.classList.toggle('Cart-bag');
    
})
