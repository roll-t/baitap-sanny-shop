const cartItem = document.querySelector('.cart-item')
const spaceBlock = document.querySelector('.space-block')
const closeItem = document.querySelector('.close-item')
const wrapCart = document.querySelector('.wrap-cart')

cartItem.addEventListener('click',()=>{
    wrapCart.classList.add('active')
})

closeItem.addEventListener('click',()=>{
    wrapCart.classList.remove('active')
})

spaceBlock.addEventListener('click',()=>{
    wrapCart.classList.remove('active')
})
