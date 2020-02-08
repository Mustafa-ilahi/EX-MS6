var userInput = prompt("Enter a string");
var removeCharacter = prompt("Which character you wants to remove?");
var result = userInput.replace(removeCharacter,'');
document.write(result);