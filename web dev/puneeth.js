function calculateTotal() {
    // Get the price and quantity for each item
    var price1 = 150;
    var quantity1 = parseInt(document.getElementById('orderCount1').textContent);
    var price2 = 300;
    var quantity2 = parseInt(document.getElementById('orderCount2').textContent);
    var price3 = 350;
    var quantity3 = parseInt(document.getElementById('orderCount3').textContent);
    var price4 = 200;
    var quantity4 = parseInt(document.getElementById('orderCount4').textContent);
    var price5 = 200;
    var quantity5 = parseInt(document.getElementById('orderCount5').textContent);
    var price6 = 200;
    var quantity6 = parseInt(document.getElementById('orderCount6').textContent);

    // Calculate the total price for each item
    var total1 = price1 * quantity1;
    var total2 = price2 * quantity2;
    var total3 = price3 * quantity3;
    var total4 = price4 * quantity4;
    var total5 = price5 * quantity5;
    var total6 = price6 * quantity6;

    // Calculate the overall total
    var overallTotal = total1 + total2 + total3 + total4 + total5 + total6;

    // Display the overall total
    document.getElementById('overallTotal').textContent = "Total: ₹" + overallTotal;
}