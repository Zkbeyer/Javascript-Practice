
function reset(button){
    button.style.background = "none";
}
function select(button){
    button.style.background = "grey";
}


window.addEventListener('load', () =>{

    let total;
    let order = '';
    let base;
    let name;
    let coldBrew = false;
    let icedLatte = false;
    let hotLatte = false;
    let carmel = false;
    let vanilla = false;
    let honey = false;
    let brownSugar = false;
    let xtraShot= false;
    let almondMilk = false;


    const nameSelect = document.querySelector('#name');
    //base options
    const coldBrewSelect = document.querySelector('#coldBrew');
    const icedLatteSelect = document.querySelector('#icedLatte');
    const hotLatteSelect = document.querySelector('#hotLatte');
    //addatives
    const carmelSelect = document.querySelector('#carmel');
    const vanillaSelect = document.querySelector('#vanilla');
    const honeySelect = document.querySelector('#honey');
    const brownSugarSelect = document.querySelector('#brownSugar');
    const xtraShotSelect = document.querySelector('#xtraShot');
    const almondMilkSelect = document.querySelector('#almondMilk');
    //const addative = document.querySelector('#addativeID');
    //add addatives here
    //add to cart
    const addToCart = document.querySelector('#cartButton');
    //sepcialty drinks
    const teddyGrahamButton = document.querySelector('#teddyGraham');
    const honeybeeButton = document.querySelector('#honeybee');
    //const drink = document.querySelector('#drinkID');
    //add specialty drinks here
    //other
    const notes = document.querySelector('#orderNotes');
    const cart = document.querySelector('#addToCart');
    const orderDisplay = document.querySelector('#order');
    const cartList = document.querySelector('#cartList');


    //use buttons to set preference
    //add to cart button saves preferences and then resets selections
    //have buttons change totals


    //base buttons
    coldBrewSelect.addEventListener('click', () =>{
        if (coldBrew == false) {
            coldBrew = true;
            select(coldBrewSelect);
            icedLatte = false;
            reset(icedLatteSelect);
            hotLatte = false;
            reset(hotLatteSelect);
        }
        else {
            coldBrew = false;
            reset(coldBrewSelect);
        }
    })
    icedLatteSelect.addEventListener('click', () =>{
        if (icedLatte == false) {
            coldBrew = false;
            reset(coldBrewSelect);
            icedLatte = true;
            select(icedLatteSelect);
            hotLatte = false;
            reset(hotLatteSelect);
        }
        else {
            icedLatte = false;
            reset(icedLatteSelect);
        }
    })

    hotLatteSelect.addEventListener('click', () =>{
        if (hotLatte == false) {
            coldBrew = false;
            reset(coldBrewSelect);
            icedLatte = false;
            reset(icedLatteSelect);
            hotLatte = true;
            select(hotLatteSelect);
        }
        else {
            hotLatte = false;
            reset(hotLatteSelect);
        }
    })

    //addative buttons

    carmelSelect.addEventListener('click', () =>{
        if (carmel == false) {
            select(carmelSelect);
            carmel = true;
        } 
        else {
            reset(carmelSelect);
            carmel = false;
        }
    })

    vanillaSelect.addEventListener('click', () =>{
        if (vanilla == false) {
            select(vanillaSelect);
            vanilla = true;
        } 
        else {
            reset(vanillaSelect);
            vanilla = false;
        }
    })

    honeySelect.addEventListener('click', () =>{
        if (honey == false) {
            select(honeySelect);
            honey = true;
        } 
        else {
            reset(honeySelect);
            honey = false;
        }
    })

    brownSugarSelect.addEventListener('click', () =>{
        if (brownSugar == false) {
            select(brownSugarSelect);
            brownSugar = true;
        } 
        else {
            reset(brownSugarSelect);
            brownSugar = false;
        }
    })

    xtraShotSelect.addEventListener('click', () =>{
        if (xtraShot == false) {
            select(xtraShotSelect);
            xtraShot = true;
        } 
        else {
            reset(xtraShotSelect);
            xtraShot = false;
        }
    })

    almondMilkSelect.addEventListener('click', () =>{
        if (almondMilk == false) {
            select(almondMilkSelect);
            almondMilk = true;
        } 
        else {
            reset(almondMilkSelect);
            almondMilk = false;
        }
    })

    addToCart.addEventListener('click', (e) => {
        if (coldBrew == false && icedLatte == false && hotLatte == false){
            alert('Please Select a Base');
            return;
        }
    
        //do actual stuff
        
        //finding base
        if (coldBrew == true){
            base = 'Cold Brew ';
        }
        if (icedLatte == true){
            base = 'Iced Latte ';
        }
        if (hotLatte == true){
            base = 'Hot Latte ';
        }

        //finding addatives
        if (carmel == true){
            order += 'Carmel ';
        }
        if (vanilla == true){
            order += 'Vanilla ';
        }
        if (honey == true){
            order += 'Honey ';
        }
        if (brownSugar == true){
            order += 'Brown Sugar ';
        }
        if (xtraShot == true){
            order += 'Extra Shot ';
        }
        if (almondMilk == true){
            order += 'Almond Milk ';
        }

        //add to cart
        //alert(name + ': ' + base + order);

        const cartItem = document.createElement("div");
        cartItem.classList.add("item");
        cartItem.innerHTML =base+ ': '  + order;

        cartList.appendChild(cartItem);


        //reset buttons
        reset(coldBrewSelect);
        coldBrew = false;
        reset(icedLatteSelect);
        icedLatte = false;
        reset(hotLatteSelect);
        hotLatte = false;
        reset(carmelSelect);
        carmel = false;
        reset(vanillaSelect);
        vanilla = false;
        reset(honeySelect);
        honey = false;
        reset(brownSugarSelect);
        brownSugar = false;
        reset(xtraShotSelect);
        xtraShot = false;
        reset(almondMilkSelect);
        almondMilk = false;
        })

    teddyGrahamButton.addEventListener('click', () =>{
        const cartItem = document.createElement("div");
        cartItem.classList.add("item");
        cartItem.innerHTML = "Teddy Graham Latte"

        cartList.appendChild(cartItem);
     })
     honeybeeButton.addEventListener('click', () =>{
        const cartItem = document.createElement("div");
        cartItem.classList.add("item");
        cartItem.innerHTML = "Honeybee Latte"

        cartList.appendChild(cartItem);
    })







})




