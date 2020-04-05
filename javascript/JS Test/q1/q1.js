let date = new Date();
let month =  date.getMonth() + 1;
let currentDate = date.getDate(); 
let year = date.getFullYear();
document.write("<h1>" + "Question 1" + "</h1>")
document.write("<h2>" + "Current Date: " +  currentDate + "-" + month + "-" +  year + "</h2>");
document.write("<h2>" + "Current Time: " +   date.toLocaleTimeString() + "</h2>");