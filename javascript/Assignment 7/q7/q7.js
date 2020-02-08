document.write("<h1>" + "Question 7" + "</h1>");
const students = ['hassan', 'salman', 'kamran', 'rashid', 'faizan', 'noor'];
function filterStudents(data, str) {
    return data.filter(function(name) {
      return name.endsWith(str);
    });
  }
document.write(filterStudents(students, "an"));