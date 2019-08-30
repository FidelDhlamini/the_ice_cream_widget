 describe('The IceCreamBill ', function () {

     it('it return a message to tell which ice cream flavor was selected', function () {
         var userSelects = IceCreamBill();

         userSelects.selectFlavour("vanilla")
         assert.equal('Vanilla flavor selected', userSelects.selectFlavour("vanilla"));
         assert.equal('Chocolate flavor selected', userSelects.selectFlavour("chocolate"));
         assert.equal('Strawberry flavor selected', userSelects.selectFlavour("strawberry"));


     });

     it('it return a message to tell what type of ice cream container was selected', function () {
         var userSelects = IceCreamBill();

         userSelects.typeofContainer()
         assert.equal("Ice cream in a plain cone", userSelects.typeofContainer("plainCone"));
         assert.equal("Ice cream in a paper cup", userSelects.typeofContainer("paperCup"));
         assert.equal("Ice cream in a sugar cone", userSelects.typeofContainer("sugarCone"));


     });
     it('it return a message to tell what type of ice cream topping was selected', function () {
         var userSelects = IceCreamBill();

         userSelects.addTopping()
         assert.equal("Topped with Crumbled Peanuts", userSelects.addTopping("crumbedPeanuts"));
         assert.equal("Topped with Oreos", userSelects.addTopping("Oreos"));
         assert.equal("Dipped in Chocolate", userSelects.addTopping("chocolateDip"));


     });
     it('', function () {
         var userSelects = IceCreamBill();

         userSelects.addTopping()
         assert.equal("Topped with Crumbled Peanuts", userSelects.addTopping("crumbedPeanuts"));
         assert.equal("Topped with Oreos", userSelects.addTopping("Oreos"));
         assert.equal("Dipped in Chocolate", userSelects.addTopping("chocolateDip"));


     });










 });