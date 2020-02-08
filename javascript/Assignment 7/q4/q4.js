document.write("<h1>" + "Question 4" + "</h1>");
function multiply(){
    firstNo = document.getElementById("input1").value;
    secondNo = document.getElementById("input2").value;
    console.log(firstNo*secondNo);
    document.getElementById("result").innerHTML = "The Result Is: " + "<br />" +firstNo*secondNo;
}
function divide(){
    firstNo = document.getElementById("input1").value;
    secondNo = document.getElementById("input2").value;
    console.log(firstNo/secondNo);
    document.getElementById("result").innerHTML = "The Result Is: " + "<br />" +firstNo/secondNo;
}
