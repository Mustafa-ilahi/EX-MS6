var totalMarks = prompt("Enter total marks");
var obtainedMarks1 = prompt("Enter obtained marks of subject1");
var obtainedMarks2 = prompt("Enter obtained marks of subject2");
var obtainedMarks3 = prompt("Enter obtained marks of subject3");
    obtainedMarks = parseInt(obtainedMarks1) + parseInt(obtainedMarks2) + parseInt(obtainedMarks3);
    var percentage = obtainedMarks/totalMarks * 100;
    var pecentage2 =  parseInt(percentage);
    document.write("<h1>"+ "Marksheet" + "</h1>");
    document.write("Total Marks: " + totalMarks);
    document.write("<br />");
    document.write("Obtained Marks: " + obtainedMarks);
    document.write("<br />");
    document.write("Percentage: " + pecentage2 + "%");
    document.write("<br />");
    if(pecentage2>=80)
    {
        document.write("Grade: A-one")
        document.write("<br />");
        document.write("Remarks: Excellent");
    }
    else if(pecentage2>=70)
    {
        document.write("Grade: A")
        document.write("<br />");
        document.write("Remarks: Good");
    }
    else if(pecentage2>=60)
    {
        document.write("Grade: B")
        document.write("<br />");
        document.write("Remarks: You need to improve");  
    }
    else if(pecentage2<60)
    {
        document.write("Grade: Fail")
        document.write("<br />");
        document.write("Remarks: Sorry");
    }
    else{
        document.write("Invalid input..!");
    }    