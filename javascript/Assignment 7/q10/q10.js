var userInput = prompt("Enter string to check is it palindrome or not");
function checkPalindrome(str) {
    var reversestr = str.split("").reverse().join("");
    return str === reversestr;
  }
document.write("<h3>"+checkPalindrome(userInput)+"</h3>");