var students = ['hassan', 'salman', 'kamran', 'rashid', 'faizan', 'noor'];
function filterItems(arr, query) {
    return arr.filter(function(el) {
        return el.indexOf(query) !== -1
    })
  }
console.log(filterItems(students,'an'));  