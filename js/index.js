var listOfItems, listOfPrices, items, prices, text, itemLen, priceLen, i, j;

listOfItems = ["Golden Delicious Apples", "Moscato Grapes", "Center-cut Bacon", "Corned Beef Brisket", "Blueberry Oatmeal", "Raw Honey", "1 gal Milk"];

listOfPrices = ["2.39", "4.50", "6.99", "17.99", "4.99", "12.99", "2.50"];

itemLen = listOfItems.length;
priceLen = listOfPrices.length;

var shoppingCart = [];
var itemCost = [];

text = "<ul>";
for (i = 0; i < itemLen; i++) {
  document.getElementById("storeDirectory").innerHTML = text += "<li>" + listOfItems[i] + " • " + listOfPrices[i] + " <button>Add Item</button>" + "</li>";
}
text += "</ul>";

function fillCart() {
  for (i = 0; i < shoppingCart.length; i++) {
    document.getElementById("shoppingCart").innerHTML = "<p>" + shoppingCart[i] + " • " + itemCost[i] + "</p>";
  }
  
  
}