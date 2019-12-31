var totalMarks = prompt("Enter total Marks");
var subj1 = prompt("Enter Marks of subj1");
if(subj1<=0 || subj1>100)
{
    alert("Invalid input");
}
else{
    var subj2 = prompt("Enter Marks of subj2");
    if(subj2<=0 || subj2>100)
    {
        alert("Invalid input");
    }
    else{
        var subj3 = prompt("Enter Marks of subj3");
        if(subj3<=0 || subj3>100)
        {
            alert("Invalid input");
        }
        else{
            var obtainedMarks = parseInt(subj1) + parseInt(subj2) + parseInt(subj3);
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
                document.write("Grade: A-one");
                document.write("<br />");
                document.write("Remarks: Excellent");
            }
            else if(pecentage2>=70)
            {
                document.write("Grade: A");
                document.write("<br />");
                document.write("Remarks: Good");
            }
            else if(pecentage2>=60)
            {
                document.write("Grade: B");
                document.write("<br />");
                document.write("Remarks: You need to improve");  
            }
            else if(pecentage2<60)
            {
                document.write("Grade: Fail");
                document.write("<br />");
                document.write("Remarks: Sorry");
            }
            else{ 
                document.write("Invalid input..!");
                }    
        }        
    }
}
