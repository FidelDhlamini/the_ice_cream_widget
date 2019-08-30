const flavorButtons = document.querySelector(".whichIceCreamFlavor");
const containerButtons = document.querySelector(".whichContainer");
const toppingButtons = document.querySelector(".whichTopping");
const addToCartBtn = document.querySelector(".addButton");
const displayCart = document.querySelector(".display")

const instance = IceCreamBill();

function getIceCreamBill() {
    if (addToCartBtn) {
        //     var costOfIcecrm = instance.cart();
        flavor();

    }
    // 

}

function flavorIcc() {
    if (flavorButtons) {
        var flavorOfChoice = document.querySelector("input[name='iceCreamFlavor']:checked")
        var flavorSlctd = instance.selectFlavour(flavorOfChoice)
    }

    displayCart.innerHTML = flavorSlctd;

}
console.log(flavorIccrm())


// function total() {
//     if (flavor() && container() && topping() == true) {
//         var costOfIcecrm = instance.cart();

//     }

//     return costOfIcecrm;

// }
// displayCart.innerHTML = getIceCreamBill();



// function flavor() {
//     if (flavorButtons) {
//         var flavorOfChoice = document.querySelector("input[name='iceCreamFlavor']:checked")
//         var flvrSelected = instance.selectFlavour()
//     }
//     return true;
// }

// function container() {
//     if (containerButtons) {
//         var containerOfChoice = document.querySelector("input[name='container']:checked")
//         var cntnrSelected = instance.typeofContainer()
//     }
//     return true;
// }

// function topping() {

//     if (toppingButtons) {
//         var containerOfChoice = document.querySelector("input[name='iccrmTopping']:checked")
//         var toppingSelected = instance.addTopping()
//         return true;
//     }
// }

addToCartBtn.addEventListener("click", getIceCreamBill);