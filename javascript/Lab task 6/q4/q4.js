const fruits = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];

  var userInput = prompt("Enter a fruit name").toLowerCase();
  function checkFruit(fruit)
  {
    return fruit.name==userInput;
}
var userSearch = fruits.find(checkFruit);
console.log(userSearch);
