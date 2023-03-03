// exercice number 2
let text = "I love teaching and empowering people I teach HTML CSS JS React Python.";
const array = text.split(" ");
console.log(array.length);
// exercice number 3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift('meat')
shoppingCart.push('sugar')
shoppingCart[2] = "greentea"
// exercise number 4
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
if (countries.includes('Ethopia')) {
    console.log("Ethopia")
}else {
    countries.push("Ethopia")
}
