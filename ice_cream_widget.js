function IceCreamBill(orders) {
    var price = 0.00;
    var addedIceCrm = [] || orders;


    function addIceCream() {

        var desiredCombo = {
            flavor: selectFlavour("strawberry"),
            container: typeofContainer("sugarCone"),
            topping: addTopping("Oreos"),
            cost: "R" + price.toFixed(2)

        }
        addedIceCrm.push(desiredCombo)
        return desiredCombo
    }
    console.log(addIceCream())

    function cart() {
        return addedIceCrm;
    }


    function selectFlavour(flavor) {


        if (flavor === "vanilla") {
            price = 7.00;
            return "Vanilla flavor selected";
        }
        if (flavor === "strawberry") {
            price = 7.50;
            return "Strawberry flavor selected";
        }
        if (flavor === "chocolate") {
            price = 8.00;
            return "Chocolate flavor selected";
        }

    }

    function typeofContainer(cont) {
        price;
        if (cont === "plainCone") {
            price = price + 2.00;
            return "Ice cream in a plain cone";

        }
        if (cont === "paperCup") {
            price = price + 4.00;
            return "Ice cream in a paper cup";
        }
        if (cont === "sugarCone") {
            price = price + 2.00;
            return "Ice cream in a sugar cone";
        }
    }
    // console.log(typeofContainer("sugarCone"));


    function addTopping(topping) {
        price;
        if (topping === "crumbedPeanuts") {
            price = price + 1.00;
            return "Topped with Crumbled Peanuts"
        }
        if (topping === "Oreos") {
            price = price + 2.00;
            return "Topped with Oreos"
        }
        if (topping === "chocolateDip") {
            price = price + 2.50;
            return "Dipped in Chocolate"
        }

    }
    return {
        selectFlavour,
        typeofContainer,
        addTopping,
        addIceCream,
        cart
    }
}