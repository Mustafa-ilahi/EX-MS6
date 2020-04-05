document.write("<h1>" + "Question 4" + "</h1>")
let students = [
    {
        name: "Mustafa",
        age: 20,
        student_Id : 276,
    },
    {
        name: "Rafay",
        age: 22,
        student_Id : 252,
    },
    {
        name: "Hammad",
        age: 27,
        student_Id : 301,
    },
    {
        name: "Haziq",
        age: 30,
        student_Id : 277,
    },
    {
        name: "Murtuza",
        age: 35,
        student_Id : 290,
    },
    {
        name: "Aryan",
        age: 26,
        student_Id : 295,
    },
    {
        name: "Mehmood",
        age: 36,
        student_Id : 292,
    },
    {
        name: "Muzammil",
        age: 28,
        student_Id : 289,
    },
    {
        name: "Basit",
        age: 34,
        student_Id : 300,
    },
    {
        name: "Nabeel",
        age: 35,
        student_Id : 280,
    },
]
checkAge = (value) =>{
    // console.log(value);
    if(value.age<30){
        console.log(value.name);
        console.log(value.student_Id);
    }
    
}
let filterData = students.filter(checkAge);