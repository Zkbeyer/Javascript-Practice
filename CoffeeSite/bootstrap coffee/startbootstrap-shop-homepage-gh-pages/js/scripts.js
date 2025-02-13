/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removerCartItemButtons = document.getElementsByClassName('remove')
    for (var i = 0; i < removerCartItemButtons.length; i++) {
        var button = removerCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('quantity')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('add-to-cart')
    for (var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    var selectionButtons = document.getElementsByClassName('selection')
    for (var i = 0; i < selectionButtons.length; i++){
        var button = selectionButtons[i]
        button.addEventListener('click', addToCartSelect)
    }

    var addativeButtons = document.getElementsByClassName('addative')
    for (var i = 0; i < addativeButtons.length; i++){
        var addativeButton = addativeButtons[i]
        addativeButton.addEventListener('click', isClicked)
        addativeButton.addEventListener('mouseenter', showPrice)
    }

    var payButton = document.getElementsByClassName('cart-pay')[0]
    payButton.addEventListener('click', cartPay)
}


function removeCartItem(event){
    var buttonClicked = event.target
           buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
           updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

function addToCartSelect(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('item-title')[0].innerText
    var price = shopItem.getElementsByClassName('item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('item-image')[0].src
    var addatives = document.getElementsByClassName('addative')
    let addativeList = []
    var j = 0;
    for (var i = 0; i < addatives.length; i++){
        var addative = addatives[i]
        var priceValue = parseFloat(price.replace('$', ''))
        if (addative.classList.contains('btn-dark')){
            addativeList[j] = addative.innerText
            j++
            switch(addative.innerText){
                case 'Caramel':
                case 'Vanilla':
                    priceValue = priceValue + .6
                    break
                case 'Brown Sugar':
                case 'Honey':
                case 'Creamer':
                case 'Extra Shot':
                    priceValue = priceValue + .3
                    break
                case 'Cold Foam':
                    priceValue = priceValue + .8
                    break
            } 
            price = '$' + priceValue.toFixed(2)
        }
    }
   
    addItemToCart(title, price, imageSrc, addativeList)
    updateCartTotal()
    selectionReset()
    

}

function selectionReset(){
    var addatives = document.getElementsByClassName('addative')
    for (var i = 0; i < addatives.length; i++){
        var addative = addatives[i]
        if (addative.classList.contains('btn-dark')){
            addative.classList.remove('btn-dark')
            addative.classList.add('btn-light')
        }
    }

}




function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('item-title')[0].innerText
    var price = shopItem.getElementsByClassName('item-price')[0].innerHTML
    var imageSrc = shopItem.getElementsByClassName('item-image')[0].src
    let addatives = []
    addatives[0] = 'N/A'
    addItemToCart(title, price, imageSrc, addatives)
    updateCartTotal()

}

function addItemToCart(title, price, imageSrc, addatives){
    var cartRow = document.createElement('div')
    var cartCol = document.getElementsByClassName('cart-column')[0]
    var cartItemNames = cartCol.getElementsByClassName('cart-item-title')
    var cartAddatives = cartCol.getElementsByClassName('cart-item-addatives')
    for (var i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerText == title && cartAddatives[i].innerText == addatives.toString()){
            alert('This item is already in the cart')
            return
        }
    }
    var cartRowContents = `
    <div class="item card rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="item-row row d-flex justify-content-between align-items-center">
        <div class=" col-sm-12 col-md-2 col-lg-2 col-xl-2">
          <img
            src="${imageSrc}"
            class="img-fluid rounded-3" alt="Cotton T-shirt">
        </div>
        <div class=" col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
          <p class="cart-item-title lead fw-normal mb-2">${title}</p>
          <p class="addative-location"><span class=" text-muted">Addatives: </span><span class="cart-item-addatives">${addatives}</span></p>
        </div>
        <div class=" col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 d-flex">
          <input id="form1"  min="0" name="quantity" value="1" type="number"
            class="quantity form-control form-control-sm" />
        </div>
        <div class=" col-4 col-sm-4 col-md-2 col-lg-2 col-xl-2 ">
          <h5 class="item-price mb-0">${price}</h5>
        </div>
        <div class=" col-4 col-sm-3 col-md-2 col-lg-1 col-xl-1 text-end">
          <a href="#!" class=" remove btn text-danger">Remove</a>
        </div>
      </div>
    </div>
    <div class="card-body p-4 d-flex flex-row">
        <div class="form-outline flex-fill">
        <textarea type="text" id="notes" class="form-control form-control-lg" placeholder="Other Requests"></textarea>
        </div>
     </div>
  </div> `
  
  cartRow.innerHTML = cartRowContents
    cartCol.append(cartRow)
    cartRow.getElementsByClassName('remove')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('quantity')[0].addEventListener('change', quantityChanged)

}

function updateCartTotal() {
    var cartItemContainer = document.getElementById('cart')
    var cartItems = cartItemContainer.getElementsByClassName('item')
    var total = 0
    var finalQuantity = 0
    for (var i = 0; i < cartItems.length; i++) {
        var cartItem = cartItems[i]
        var priceElement = cartItem.getElementsByClassName('item-price')[0]
        var quantityElement = cartItem.getElementsByClassName('quantity')[0]
        var price = parseFloat(priceElement.innerHTML.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        finalQuantity = finalQuantity + parseInt(quantity)
    }
    document.getElementsByClassName('cart-total')[0].innerHTML = '$' + total.toFixed(2)
    document.getElementsByClassName('cart-badge')[0].innerHTML = finalQuantity
}

function cartPay() {
    var cart = document.getElementsByClassName('cart-column')
    cart.firstChild.remove
    updateCartTotal()
    console.log("work")
}

function isClicked(event){
    var element = event.target
    if (element.classList.contains('btn-light')){
        element.classList.remove('btn-light')
        element.classList.add('btn-dark')
    }
    else {
        element.classList.add('btn-light')
        element.classList.remove('btn-dark')
    }
}


function showPrice(event){
    var button = event.target
    var value
    var original = button.innerText
    

    switch(button.innerText) {
        case 'Caramel':
        case 'Vanilla':
            value = '+ $ .60'
            break
        case 'Brown Sugar':
        case 'Honey':
        case 'Creamer':
        case 'Extra Shot':
            value = '+ $ .30'
            break
        case 'Cold Foam':
            value = '+ $ .80'
            break
        default:
            value = '+ None'
    }
    
    button.innerText = value

    button.addEventListener('mouseleave', () => {
        button.innerText = original
    })
    
    
}







