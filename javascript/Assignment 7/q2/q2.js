var showInfo = new Date();
document.write("<h1>" + "Question 2" + "</h1>");
document.write("(i)" + "<b>" +"mm-dd-yyyy: " + "</b>" + forMonth() + "-" + forDay() + "-" + showInfo.getFullYear());
document.write("<br />");
document.write("(ii)" + "<b>" + "mm/dd/yyyy: " + "</b>" + forMonth() + "/" + forDay() + "/" + showInfo.getFullYear());
document.write("<br />");
document.write("(iii)" + "<b>" + "dd-mm-yyyy: " + "</b>" + forDay() + "-" + forMonth() + "-" + showInfo.getFullYear());
document.write("<br />");
document.write("(iv)" + "<b>" + "dd/mm/yyyy: " + "</b>" + forDay() + "/" + forMonth() + "/" + showInfo.getFullYear());
function forMonth(){
    if(showInfo.getMonth()<10){
        return "0" + showInfo.getMonth();
    }
    else{
        return showInfo.getMonth();
    }
}
function forDay(){
    if(showInfo.getDay()<7)
    {
        return "0" + showInfo.getDay()
    }
}