var name=""
var arr = [
    {name: 'Asher', age: 22},
    {name: 'Zubair', age: 20},
    {name: 'Kashif', age: 23},
    {name: 'Wasif', age: 17},
    {name: 'Hanzala', age: 28}
    ]
var replace = arr.splice(3,1,{name: 'Siddiq', age: 23})
// console.log(arr);   
var pushName = arr.push({name: 'Umair', age: '23'});
// console.log(arr);
var removeElemet = arr.shift();
// console.log(arr);
var currentDate = new Date();
for(var i=0; i<=4; i++){
    arr[i].createdAt = currentDate;
}
// console.log(arr);
function checkAge(arr1){
    if(arr1.age>17 && arr1.age<=28 && arr1.name.includes('f')){
        name+=arr1.name + " ";
    }
}
arr.filter(checkAge);
console.log(name);