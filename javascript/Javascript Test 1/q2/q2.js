var Student_One = {
Student_Name : "Ahmed Abbasi",
Student_ID : "J30052425300",
Subject_HTML : 80,
Student_CSS : 90,
Student_JAVASCRIPT : 90,
Student_BOOTSTRAP : 70,
Total_Marks : 400
}
var Student_Two = {
    Student_Name : "Javed Akhtar",
    Student_ID : "J30052425300",
    Subject_HTML : 60,
    Student_CSS : 70,
    Student_JAVASCRIPT : 65,
    Student_BOOTSTRAP : 85,
    Total_Marks : 400
}
var student_One_Marksheet = (Student_One.Subject_HTML + Student_One.Student_CSS + Student_One.Student_JAVASCRIPT + Student_One.Student_BOOTSTRAP)/Student_One.Total_Marks * 100;
var student_Two_Marksheet = (Student_Two.Subject_HTML + Student_Two.Student_CSS + Student_Two.Student_JAVASCRIPT + Student_Two.Student_BOOTSTRAP)/Student_Two.Total_Marks * 100; 
if(student_One_Marksheet>student_Two_Marksheet){
    alert(Student_One.Student_Name + " eligible for scholarship");
    Student_One.Scholarship = true;
    console.log(Student_One);
}
else{
    alert(Student_Two.Student_Name + " eligible for scholarship");
    Student_Two.Scholarship = true;
    console.log(Student_Two);
}