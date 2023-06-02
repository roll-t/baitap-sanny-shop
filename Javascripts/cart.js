// const cartIcon = document.querySelector('.icon-cart')

// const closeIcon = document.querySelector('.exit')

// const subCart = document.querySelector('.sub-cart')

// cartIcon.addEventListener('click',e=>{
//     console.log("3")
//     subCart.classList.add('active')
// })

// closeIcon.addEventListener('click',e=>{
//     subCart.classList.remove('active')
// })

const listProduct = document.querySelectorAll('.product-item')
// const  listSubCart = document.querySelectorAll('.sub-cart')

listProduct.forEach(item=>{
    const  iconCart = item.querySelector('.icon-cart')
    const  subCart = item.querySelector('.sub-cart')
    const  closeIcon = item.querySelector('.exit')

    iconCart.addEventListener('click',e=>{
        // listSubCart.forEach(value=>{
        //    value.classList.remove('active')
        // })
        const listSubCart = document.querySelector('.sub-cart.active')
        if(listSubCart){
            listSubCart.classList.remove('active')
        }

        subCart.classList.add('active')
    })

    closeIcon.addEventListener('click',e=>{
        subCart.classList.remove('active')
    })
})


