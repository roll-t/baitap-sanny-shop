function handleAddCart(){

    const list_product=document.querySelectorAll('.product-item')
    const wrapProductCart=document.querySelector('.list-body-product')

    const data=JSON.parse(localStorage.getItem('valueCart'))

    let database=data ? data :[]

    function getValueProduct(wrap){
        const listSize=wrap.querySelectorAll('.option-size input')
        let currentSize='M'
        listSize.forEach(input=>{
            if(input.checked){
                currentSize=input.value
            }
        })
        const valuePrduct={
            name:wrap.querySelector('.bot-product .name-product').innerHTML,
            price:wrap.querySelector('.bot-product .price span:nth-child(1)').innerHTML,
            size:currentSize,
            img:wrap.querySelector('.imgproduct').src,
            quantity:wrap.querySelector('.quantity-add-cart').value,
            id:wrap.querySelector('.id-product').value
        }
        
        return valuePrduct
    }

    function addCart(){
        list_product.forEach(items =>{
            const btn=items.querySelector('.button-50')
            btn.addEventListener('click',e=>{
              const valueProduct=getValueProduct(items)
              database.push(valueProduct)
              localStorage.setItem('valueCart',JSON.stringify(database))
              handleDatabase()
            })
        })
    }
    addCart()


    function handleDatabase(){
        const cartItems=document.querySelectorAll('.list-body-product .body-product-item')
        cartItems.forEach(items=>{
            items.remove()
        })  
        database.forEach(items=>{
            renderCartItems(items)
        })
        handleCartItems()
    }
    handleDatabase()

    
    function removeItemCart(id){
        //filter
        const arrValue=database.filter(items=>{
            return items.id!=id
        })
        return arrValue
    }


    function handleCartItems(){
        const listProductCart=document.querySelectorAll('.list-body-product .body-product-item')
        listProductCart.forEach(items=>{
            const close=items.querySelector('.bin-icon')
            close.addEventListener('click',e=>{
                const idCart=items.querySelector('.id-product-cart').value  
                database=removeItemCart(idCart)
                localStorage.setItem('valueCart',JSON.stringify(database))
                handleDatabase()
            })
        })
    }
    handleCartItems()
    function renderCartItems(value){
        const wrap=document.createElement('li')
        wrap.className='body-product-item'
        const content=`
                    <input type="checkbox">
                    <img src="${value.img}" alt="" class="img-product-cart">
                    <div class="option-product">
                        <p class="name-product-cart">Name: ${value.name}</p>
                        <div class="size-cart">
                            <p>Size: </p>
                            <select>
                                <option value="">${value.size}</option>
                                <option value="">L</option>
                                <option value="">XL</option>
                            </select>
                        </div>
                        <div class="quantity">
                        <span>Quantity: </span><input min="0" value="${value.quantity}" type="number">
                        </div>
                    </div>
                    <div class="price">Price: 
                        <span>${value.price}</span>
                        <span> VND</span>
                    </div>
                    <ion-icon class="bin-icon" name="trash-outline"></ion-icon>
                    <input type="hidden" value="${value.id}" class="id-product-cart"/>
                    `;
        wrap.innerHTML=content
        wrapProductCart.append(wrap)
    }
}
handleAddCart()