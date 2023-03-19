let dishData = [
    {dish: 'Beef stroganoff', price: 18.00},
    {dish: 'Beet salad', price: 6.50},
    {dish: 'Cheeseburger', price: 10.00},
    {dish: 'Fried chicken', price: 12.50},
    {dish: 'Tuna sandwich', price: 9.00},
    {dish: 'Pasta carbonara', price: 14.00}
];

function getPrices(taxBoolean) {
    for (let i = 0; i < dishData.length; i++) {
        let finalPrice;
        if (taxBoolean) {
            finalPrice = dishData[i].price * 1.1;
        } else if (!taxBoolean) {
            finalPrice = dishData[i].price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log("Dish: " + dishData[i].dish + " Price: $" + finalPrice.toFixed(2));
    }
}

function getDiscount(taxBoolean, guests) {
    let price = getPrices(taxBoolean);
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log('Discount is: $' + discount);
    } else {
        console.log('The second argument must be a number between 0 and 30');
    }
}

// example usage:
getDiscount(true, 2);
getDiscount(false, 10);
