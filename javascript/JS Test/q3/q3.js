document.write("<h1>" + "Question 3" + "</h1>");
let userInput = prompt("Enter string to check is it palindrome or not");
checkPalindrome = (str) =>{
    let reversestr = str.split("").reverse().join("");
    if (str === reversestr)
    {
        document.write(userInput + " : "  + "Yes it's a palindrome");
    }
    else{
        document.write(userInput + " : "  + "No it's not a palindrome");
    }
  }
checkPalindrome(userInput);